# Multi-Agent RSS Article System

## Goal

Build a **multi-agent workflow** in n8n where specialized agents cooperate to turn RSS headlines into a polished article. You combine:

1. **Topic Selector Agent** — explores items from your RSS feeds (you may reuse the GitHub Blog feed from earlier tasks), compares them against what you **already wrote about**, and **chooses one topic** that is still “free.”
2. **Writer Agent** — drafts a short article for the selected topic.
3. **Proofreading Agent** — checks the draft for **spelling**, overall **article length**, and **paragraph length** (define sensible limits in your prompts or checks).

The outcome should feel like a **pipeline**: research → pick unused topic → write → validate (and revise if needed).

## Prerequisites

- Comfortable with the **AI Agent** node, **tools**, and chat memory (tasks **RSS content agent** and **Persistent Memory with Neon** or equivalent).
- Ideally task **Store Article Summaries Postgres DB**, so you already have a **Neon table** (or equivalent store) you can query for **which URLs or titles you already covered**. If not, use another durable list (for example a Postgres table you create for “published topics”)—the important part is **deduplication**, not the exact schema.

## Roles at a glance

| Agent | Responsibility |
| ----- | ---------------- |
| Topic Selector | Use RSS as a **tool**, pull recent items, pick **one** topic not present in your “already written” records. |
| Writer | Produce the article body from the chosen topic (title, angle, link). |
| Proofreader | Flag or fix spelling issues and enforce length rules (whole text + per paragraph). |

You may implement proofreading as a **second AI Agent** or as **deterministic nodes** (for example word counts and split-by-paragraph checks after the writer). Pick what keeps your workflow maintainable.

## Step 1 — Sketch the control flow

Before adding nodes, decide:

- Where does the **run** start (manual test, schedule, or Chat Trigger)?
- How do agents **pass structured data** forward (topic URL, title, draft text)? Using **fields** or clear JSON between nodes reduces ambiguity.

**Patterns from the lesson:** combining a **sequential** chain (selector → writer → proofreader) with a **loop** (for example: if proofreading fails, send feedback back to the writer and try again) is a straightforward way to meet the goal. Other orchestration patterns are allowed if you document what you chose.

## Step 2 — Topic Selector Agent

- Attach **RSS Feed Read** (or your feeds) as **tool(s)** so the model can fetch recent items.
- Give the agent access to **storage** that lists topics or URLs you already used—aligned with your Neon workflow from the article-summary task, or a minimal table you maintain for this exercise.
- System prompt: explicitly require **one** chosen topic with **reason** it is not a duplicate.

## Step 3 — Writer Agent

- Input: structured output from the selector (title, URL, summary bullets—whatever you standardized).
- Output: full draft respecting your editorial rules (tone, max words, sections optional).

## Step 4 — Proofreading stage

- Validate **spelling** (agent-based or integrated checker), **total word count**, and **paragraph length** (for example max words per paragraph).
- If checks fail, route back to the writer **with concrete feedback** (which paragraph, how many words over limit). That back-edge is your **loop**.

## Step 5 — Tools vs sub-workflows (design choice)

Reflect on when to use:

- **AI Agent tools** (RSS, Postgres lookup, HTTP): best for **single-purpose calls** the LLM should invoke as needed.
- **Sub-workflow / Execute Workflow–style tools**: better when a **whole branch** is reusable, long, or needs its own error handling.

Briefly note in your README or workflow notes which pattern you used where, so a colleague could extend the system later.