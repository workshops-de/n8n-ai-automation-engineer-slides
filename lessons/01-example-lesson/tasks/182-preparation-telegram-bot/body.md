# Preparation: Create a Telegram Bot

Before we can build the Telegram agent in n8n, you need your own Telegram bot and its API token. You create both quickly via the official **BotFather**.

## What is BotFather?

BotFather is Telegram’s official bot for creating and managing bots. It gives you the API token n8n uses later to send and receive messages on your behalf.

## Step-by-step guide

### 1. Open BotFather

- Open Telegram (desktop or mobile)
- Search for `@BotFather` and start the chat
- Or open directly: [t.me/BotFather](https://t.me/BotFather)

### 2. Create a new bot

- Send `/newbot`
- BotFather asks for a **display name** (e.g. `My n8n AI Agent`)
- Then choose a **username** — it must be unique and end with `bot` (e.g. `my_n8n_ai_agent_bot`)

### 3. Copy the API token

- After creation, BotFather shows a token like `123456789:ABCdef...`
- **Store this token securely** — you will need it in the next task

> ⚠️ Never share your token publicly. Anyone with it can send messages as your bot.

### 4. Add the Telegram credential in n8n

- Open n8n → **Credentials** → **Add Credential**
- Choose **Telegram API**
- Paste your token and save the credential
