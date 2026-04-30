# Multi-Agent Pipeline with Sub-Workflows

## Goal

Turn your multi-agent article pipeline into a **maintainable set of workflows**. Instead of one oversized canvas, you implement **each responsibility as its own workflow** (sub-workflow) and let a **parent orchestrator** call them in sequence.

You practice:

- **Child workflows** with clear **inputs and outputs** (the “contract” between workflows).
- An **orchestrator workflow** that runs the child workflows via **Execute Workflow** (or your n8n version’s equivalent “run another workflow” mechanism).
- Optional reuse: the same child workflow can be called from tests, schedules, or other parents later.

This task assumes you already understand the **roles** (topic selection, writing, proofreading) from task **Multi-Agent RSS Article System**. Here the emphasis is **architecture with sub-workflows**, not re-explaining RSS theory.

## Step 1 — Define the data contract

Before touching nodes, write down **your JSON data structure** 

1. **Orchestrator → Topic Selector** — what the parent sends (for example empty trigger data or a request id).
2. **Topic Selector → Writer** — stable fields such as `title`, `url`, `summary_hint`.
3. **Writer → Proofreader** — `draft_text` plus any limits (`max_words`, `max_words_per_paragraph`).

## Step 2 — Child workflow: Topic Selector

1. Create a **new workflow** dedicated to topic selection.
2. Start it with the trigger that runs **when another workflow executes this workflow**.
3. Implement the **same behaviour** you used before: RSS tool(s), lookup of already-covered topics, output of **one** unused topic as structured items or fields.

Keep outputs **consistent** with Step 1.

## Step 3 — Child workflow: Writer

1. New workflow; same “called by parent” trigger pattern.
2. Accept the topic payload from the orchestrator’s **Execute Workflow** mapping.
3. Produce the article draft and pass it forward in the agreed shape.

## Step 4 — Child workflow: Proofreader

1. New workflow for spelling and length checks (agent-based, deterministic nodes, or hybrid—as long as the contract is clear).
2. Output must include at least: **`approved`** (boolean) and **`feedback`** (string the Writer child can consume on retry).

## Step 5 — Orchestrator workflow

1. New workflow with your normal entry trigger (manual, schedule, or Chat Trigger—your choice).
2. Chain **Execute Workflow** nodes: Selector → Writer → Proofreader.
3. Add **looping behaviour**: if proofreading is not approved, call **Writer** again with **feedback** merged into the input (respect a **maximum retry** count).