# Perplexity Research Agent

## Goal

Build an AI Agent that can search the internet in real-time using Perplexity AI and answer questions with up-to-date, sourced information – turning your agent into a powerful research assistant.

## What You'll Learn

- Integrating external AI APIs as agent tools
- Using the Perplexity API for real-time web search
- Configuring HTTP Request nodes with dynamic AI inputs (✨ or `$fromAI`)
- Building agents that autonomously decide when to research a topic

## Workflow Overview

**Chat Trigger** → **AI Agent** (+ Perplexity Tool) → **Response with Sources**

## Step-by-Step Guide

### 1. (optional) Get a Perplexity API Key

We provide an API Key in the Enviorment from Workshops.DE. Only if you want to your own! =)

- Go to [perplexity.ai](https://www.perplexity.ai) and create an account
- Navigate to **Settings → API** and generate an API key
- Copy the key – you'll need it in Step 3

### 2. Set Up the Base Workflow

- Add a **Chat Trigger** node
- Add an **AI Agent** node (Claude recommended)
- Connect Chat Trigger → AI Agent
- Add a **Simple Memory** node to the AI Agent

Create a system prompt in dialog with your preferred chat agent.

### 3. Configure the Perplexity Tool to your Agent

- Add an **Perplexi Tool** node and set `Text` field to AI Magic ✨ or use `$fromAI()`.

> **Important:** The `$fromAI()` function allows the AI Agent to dynamically pass the search query when it calls this tool. The agent decides what to search for.

### 4. Test the Agent

Open the chat and try these research queries:

```
What are the latest developments in AI this week?
```
```
What is the current stock price trend for major tech companies?
```
```
Research the newest features of n8n and summarize them.
```
```
What happened at the last major climate summit?
```

### 5. Verify Source Attribution

The Perplexity API response includes citations. 


