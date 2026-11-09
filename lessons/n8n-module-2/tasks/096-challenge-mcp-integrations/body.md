## Goal

Design and implement a **custom MCP (Model Context Protocol) server** that connects your **mailing list** to an **AI-driven workflow**. The server must let an agent **discover every subscriber** and **send email to one subscriber at a time** (individual sends, not a single opaque “blast” tool). 

You then **integrate** this MCP with your **content creation system** so new or revised content can flow from production into personalized outreach.

## Step 1 — Choose your data and send paths

Decide explicitly:

1. **Where subscribers live** (API, database, hard-coded)
2. **How a single email is sent** (GMail, SMTP or a **dry-run log**).

Avoid hard-coding secrets in MCP tool arguments; use environment variables or your platform’s credential store.

## Step 2 — Design the MCP tool surface

Your MCP server should expose at least:

| Concern | Tool behavior |
| ------- | -------------- |
| Discovery | A tool that returns **all current subscribers**  |
| Individual send | A tool that sends **one message to exactly one subscriber**  |

## Step 3 — Setup the MCP server

1. Create a new workflow with the **MCP Server Trigger** Node.
2. Implement the tools that the MCP Server should expose 

## Step 4 — Integrate with your content creation system

Connect the MCP to the workflow that **produces** your articles or newsletters:

- After content is **approved** (manually or by your proofreading step), the agent—or a deterministic node—should be able to **fetch subscribers**, then **iterate** or **loop** so each recipient gets an **individual** send with optional personalization.