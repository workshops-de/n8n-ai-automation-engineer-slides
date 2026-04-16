# Preparation: Telegram Bot erstellen

Bevor wir den Telegram-Agenten in n8n bauen können, benötigst du einen eigenen Telegram Bot und dessen API-Token. Das geht schnell über den offiziellen **BotFather**.

## Was ist BotFather?

BotFather ist der offizielle Telegram-Bot zum Erstellen und Verwalten von Bots. Er stellt dir das API-Token aus, mit dem n8n später in deinem Namen Nachrichten senden und empfangen kann.

## Step-by-Step Guide

### 1. BotFather öffnen

- Öffne Telegram (Desktop oder Mobile)
- Suche nach `@BotFather` und starte den Chat
- Alternativ: direkt über [t.me/BotFather](https://t.me/BotFather) öffnen

### 2. Neuen Bot erstellen

- Sende `/newbot`
- BotFather fragt nach einem **Anzeigenamen** (z. B. `My n8n AI Agent`)
- Danach einen **Benutzernamen** wählen – dieser muss einzigartig sein und auf `bot` enden (z. B. `my_n8n_ai_agent_bot`)

### 3. API-Token kopieren

- Nach der Erstellung gibt BotFather ein Token im Format `123456789:ABCdef...` aus
- **Dieses Token sorgfältig aufbewahren** – du brauchst es im nächsten Task

> ⚠️ Teile dein Token niemals öffentlich. Damit kann jeder in deinem Bot-Namen Nachrichten senden.

### 4. Telegram-Credential in n8n anlegen

- Öffne n8n → **Credentials** → **Add Credential**
- Wähle **Telegram API**
- Füge dein Token ein und speichere die Credential
