# Content Creation Agent with RSS (GitHub Blog)

## Goal

Build a simple **content creation agent** in n8n that uses **The GitHub Blog** as the news source. The agent connects an **RSS feed as a tool**, pulls items from that feed, and writes **short news pieces** that **summarize** a chosen article.

Use this feed as the only example source:

**RSS URL:** [https://github.blog/feed/](https://github.blog/feed/)

## What you will practice

- AI Agent node with a clear system prompt
- **RSS Feed Read** as a **tool** the model can call
- Turning feed items into **tight news copy** (not long blog posts)

## Output requirements

Each generated piece should read like a **brief news update**:

- **Maximum 300 words**
- Focus on **what happened** and **why it matters** for developers or teams
- Base the summary on the **RSS item** (title, link, and description or content the feed provides)
- Optional: include the **source URL** so readers can open the original post

If the user does not specify which story to use, the agent should either ask a clarifying question or default to the **most recent** item from the feed.

## Step-by-step guide

### 1. Create the workflow shell

- Create a **new workflow**
- Add a **Chat Trigger** node
- Add an **AI Agent** node and connect it after the Chat Trigger
- Attach a **Chat Model** (e.g. Claude) to the AI Agent
- Add **Simple Memory** so follow-up prompts stay in context

### 2. Add the RSS feed as a tool

- Add an **RSS Feed Read** node
- Set **URL** to: `https://github.blog/feed/`
- Set **Limit** as you like (e.g. `5` or `10`) so the agent has a small set of recent posts to choose from
- Connect the RSS node to the AI Agent using the **Tools** connector on the AI Agent

### 3. System prompt

Use a prompt that encodes the **300-word cap** and the **news** style. Use a chat-assistent like Claude to generate your system prompt.

Adjust the wording to match your tone, but keep the **word limit** and **RSS tool usage** explicit.

### 4. Test in chat

Try prompts such as:

- “Summarize the latest post from the GitHub Blog.”
- “Write a short news piece about the third item in the feed.”
- “Give me a 300-word max briefing on `An update on GitHub availability` (or another title you see in the feed).”

Confirm the reply stays **at or under 300 words** and reflects the **correct article**.
