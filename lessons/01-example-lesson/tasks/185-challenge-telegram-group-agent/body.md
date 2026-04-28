# Telegram Group AI Agent

## Goal

Build an AI agent that is active in a Telegram group: it reacts to messages, sends replies via the **Telegram Send Message** node on its own, and uses **Perplexity** for web research when needed.

## Workflow overview

**Telegram Trigger** → **AI Agent** → **Telegram Send Message** (+ Perplexity tool)

---

## Part 1: Add the bot to a Telegram group

### 1. Create or open a group

- Create a new Telegram group or open an existing one
- Add your bot as a member (**Add members** → search for the bot name)

### 2. Make the bot an admin

> ⚠️ **Important:** The bot needs admin rights so it can read and send messages in the group.

- Open group settings → **Administrators** → **Add admin**

### 3. Find the group chat ID

- Open the group in the browser at https://web.telegram.org and copy the chat ID from the URL

https://web.telegram.org/a/#-1001234567890

- For groups, the `ChatID` starts with `-`, e.g. `-1001234567890`

---

## Part 2: Build the n8n workflow

### 4. Telegram Trigger node

- Add a **Telegram Trigger** node
- Select your Telegram credential
- Event: **Message**
- Save the node — n8n registers the webhook with the bot automatically

> 💡 The trigger runs on **every** message in the group. The agent decides whether and how to reply.

### 5. AI Agent node

- Add an **AI Agent** node
- Connect: **Telegram Trigger** → **AI Agent**
- Attach a **Simple Memory** node to the agent

**Example system prompt:**
```
You are a helpful AI assistant in a Telegram group.

When you receive a message, decide whether and how to reply:
- For direct questions: answer precisely and helpfully
- When research is needed: use the Perplexity tool for current information
- Keep answers short and clear (Telegram-friendly)
- Reply in the same language the user writes in

Message from: {{ $json.message.from.first_name }}
Message text: {{ $json.message.text }}
```

**Input mapping:**
- Set the agent’s `Text` field to:
  ```
  {{ $json.message.text }}
  ```

### 6. Add the Perplexity tool

- Add a **Perplexity Tool** node
- Connect it as a tool to the AI Agent
- Set the `Text` field to AI Magic ✨ or `$fromAI('query', 'The search query for internet research')`

### 7. Telegram Send Message node

- Add a **Telegram** tool node

### 8. Test the workflow

- Activate the workflow
- Send a message in the Telegram group, for example:
  - `What are the latest n8n features?`
  - `Explain briefly what RAG is`
  - `What is the weather like in Berlin right now?`
- The bot should reply within a few seconds
