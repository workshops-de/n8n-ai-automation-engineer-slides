# Loop Agent Pattern

## Goal

Extend the **Multi-Agent RSS Article System** with a proper **loop**: if the Proofreading Agent rejects the draft, the workflow automatically routes back to the Writer Agent with concrete feedback — and tries again. To prevent infinite loops, you will use **`$runIndex`** to cap the number of retries.

The result is a self-correcting pipeline:

```
Topic Selector → Writer → Proofreader
                    ↑           |
                    └── retry ──┘  (max N times)
```

## Prerequisites

- Completed task **Multi-Agent RSS Article System** (or an equivalent 3-agent pipeline with Topic Selector, Writer, and Proofreader).

Reference: [n8n built-in variables — `$runIndex`](https://docs.n8n.io/code/builtin/n8n-metadata/)

## Step 1 — Add a routing node after the Proofreader

Insert a node after the Proofreading Agent. Its job is to decide whether the draft is accepted or needs another writer pass.

The node receives the proofreader's structured output (e.g. `approved: true/false` and `feedback: "..."`) and produces two possible routes:

## Step 2 — Wire the loop back to the Writer

- Connect the `retry` branch of the routing node back to the **Writer Agent's input**.
- Pass the proofreader's `feedback` field so the Writer knows what to fix.
- The Writer's system prompt should instruct it to incorporate the feedback when the `feedback` field is present.

## Step 3 — Add a "Article approved" branch

## Step 4 — Test the loop
