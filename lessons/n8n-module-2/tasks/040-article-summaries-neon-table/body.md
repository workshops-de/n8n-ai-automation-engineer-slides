# Store Article Summaries in Neon (Dedupe by Source URL)

## Goal

Extend your **RSS news agent** so every generated mini-article is **stored in Neon** in a dedicated table. Before writing a new summary, the agent **checks whether that source URL already exists**—if it does, it can reuse the saved text instead of generating duplicates.

You create the **table yourself** in the Neon **Tables** UI (this is separate from Postgres Chat Memory tables, which n8n creates automatically).

## Prerequisites

- Tasks **RSS content agent** and **Persistent Memory with Neon** completed or equivalent knowledge.
- Same **Neon database** and **Postgres credential** in n8n you already use.

## Step 1 — Create the table in Neon (Tables UI)

Use Neon’s visual **Tables** experience—do **not** create this table with the SQL Editor for this exercise.

1. Open the [Neon Console](https://console.neon.tech), select your **project** and **branch** (often `production`).
2. Go to **Tables** --> **Database studio**.
3. Choose **+** to create table
4. Set the **table name** to `article_summaries`.
5. Add columns via the UI:

| Column       | Type              | Constraints / defaults |
| ------------ | ----------------- | ----------------------- |
| `id`         | `serial` / integer auto-generated | Set as **Primary key**, auto-increment (Neon may label this **Serial** or generate IDs automatically—follow what your UI offers). |
| `source_url` | `text`            | **Not null**. Enable **Unique** so each URL appears at most once. |
| `summary`    | `text`            | **Not null**. |
| `created_at` | `timestamp`     | Default **`now()`** (or “current timestamp”) so rows record when they were stored. |

6. Save / apply the table.

## Step 2 — Expose Postgres to the AI Agent as tools

Wire **Postgres** nodes to the AI Agent **Tools** connector so the model can select and insert rows.

Configure:

- Same Postgres **credential** as your Neon database.

Describe each tool clearly so the agent knows **when** to call lookup versus insert.

## Step 3 — Agent behaviour (system prompt)

Instruct the agent roughly as follows:

1. Identify the **canonical article URL** (from the RSS item or user message).
2. **Call the lookup tool** with that URL.
3. If a row exists → return the **stored summary** (and mention it is cached if you like).
4. If no row exists → use the RSS/content flow to **write** the mini-article (still **≤ 300 words**), then **call the insert tool** with `source_url` and `summary`.

This gives you **deduplication**: the same GitHub Blog post will not get a brand-new LLM summary every time unless you choose to override that policy in the prompt.

## Step 4 — Test

1. Ask for a summary of **one specific** feed article and confirm a **new row** appears in `article_summaries`.
2. Ask again for the **same article**—the agent should find the existing row and **not** hallucinate a totally unrelated story.
3. Verify in Neon (**Tables** view or a quick read query) that `source_url` and `summary` look correct.

## Success criteria

- [ ] Table `article_summaries` exists in Neon (created via the **Tables** UI) with **id**, **source_url**, **summary**, and **created_at**, and **unique** `source_url` values.
- [ ] AI Agent has **Postgres-backed tools** for lookup and insert (or an equally safe pattern).
- [ ] Agent **checks** for an existing summary before generating and **stores** new summaries after generation.
