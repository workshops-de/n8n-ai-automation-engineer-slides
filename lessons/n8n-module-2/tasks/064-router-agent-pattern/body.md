# Router Agent Pattern

## Goal

Build a **Router Agent** that reads a raw user prompt and decides which content format to produce — then routes to a dedicated specialist agent for that format. All branches merge at the end into a single consolidated output.

```
                    ┌─── Instagram Post Agent ───┐
User Input → Router ├─── Technical Article Agent ─┼── Merge → Consolidated Output
                    └─── Brief of a technical topic ┘
```

This pattern keeps each specialist agent focused on one job, while the router acts as a lightweight classifier.

## Prerequisites

- Familiar with the **AI Agent** node and **Structured Output Parser**.
- Completed task **Multi-Agent RSS Article System** or equivalent.


## Step 1 — Router Agent

Create an **AI Agent** node that receives the raw user input and classifies it into exactly one of three content types.

## Step 2 — Add a Switch node

After the Router Agent, place an n8n **Switch** node. 

## Step 3 — Specialist Agents

Connect one **AI Agent** node to each Switch output. Each agent receives the `topic` from the router and produces the format described in the table above.

## Step 4 — Merge and consolidate

After the three specialist agents, add a **Merge** node to collect all branch outputs into one item.

Follow the Merge node with a final **AI Agent** that consolidates the results into a single structured response: