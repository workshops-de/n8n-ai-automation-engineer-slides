# Persistent Memory with Neon (Postgres Chat Memory)

## Goal

Replace short-lived **in-memory** chat history with **persistent** storage backed by **PostgreSQL** on [Neon](https://neon.tech). You will copy your Neon **connection parameters** into n8n, attach a **Postgres Chat Memory** node to your AI Agent, and let n8n **create the chat-history table automatically**—no manual SQL required.

## Prerequisites

- A **Neon** account and project (complete the preparation task if you still need an account).
- An existing workflow with **Chat Trigger → AI Agent** (you can extend the RSS agent exercise or create a minimal test workflow).

## Why Neon?

Neon hosts serverless Postgres with a connection string you can paste straight into integrations. Your conversation rows survive n8n restarts and belong to **your** database instead of shared instance memory.

## Step-by-step guide

### 1. Open connection details in Neon

1. Sign in to the [Neon Console](https://console.neon.tech).
2. Select your **project** and **branch** (often `public`).
3. Open **Connection details** (or equivalent) for your database.

Neon shows:

- **Host** 
- **Database name**
- **User**
- **Password** 

### 2. Create Postgres credentials in n8n

1. Open **Credentials** → **New**.
2. Choose **Postgres** (same credential type used by DB nodes and Postgres Chat Memory).
3. Fill in **Host**, **Database**, **User**, **Password**, **Port** (`5432` unless Neon shows otherwise).
4. Enable **SSL** if your credential dialog offers it (required for Neon in most setups).

If your UI accepts a single **connection string**, paste Neon’s URI there instead.

Save the credential with a clear name (e.g. `Neon – workshop`).

### 3. Add Postgres Chat Memory to the AI Agent

1. Open your workflow with an **AI Agent** node.
2. On the AI Agent, open **Memory** → **Add Memory**.
3. Select **Postgres Chat Memory** ([docs](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.memorypostgreschat)).
4. Choose the **Postgres credential** you created.

Connect the memory node’s output to the AI Agent **memory** input.

### 4. Verify persistence

1. **Activate** the workflow and open the chat.
2. Send a message and mention something memorable (e.g. “My codename for this session is **Workshops.DE Test Session**”).
3. Execute again at least once so history is written.
4. Optionally refresh/re-open the chat or run another execution with the **same session key** and ask what codename you gave—the agent should recall it using Postgres-backed memory.

Optional: confirm in Neon’s **SQL Editor** that rows appeared in the chat-history table.
