# AI File Analyzer

## Goal

Download a PDF/CSV/JSON file, use AI to summarize its contents, and send a Telegram notification with the key insights.

## What You'll Learn

- Binary File Handling
- AI Summarization
- Messaging Integration (Telegram)
- Processing different file formats

## Workflow Overview

**When Chat Message Received** → **Edit Fields** → **AI Agent** → **Send Message**

## Step-by-Step Guide

### 1. When Chat Message Received - File Upload

- Add a **When chat message received** Trigger
- **Wichtig**: Aktiviere **"Allow File Uploads"** in den Chat Settings
- Users can upload PDF, CSV, or other document files via chat

### 2. Edit Fields - Binary Data Mapping

⚠️ **Wichtiger Hinweis**: Diese Node ist notwendig, um die Binary-Daten korrekt an den AI Agent weiterzugeben.

- Add an **Edit Fields (Set)** Node
- Operation: **Add/Modify Fields**
- Füge ein neues Feld hinzu:
  - **Field Name**: `binary`
  - **Field Value**: `{{ $input.item.binary.data0 }}`
- Dies mappt die hochgeladenen Datei-Daten auf das `binary` Feld, das der AI Agent verarbeiten kann

### 3. AI Agent - File Analysis

- Add an **AI Agent** Node

⚠️ **Wichtig**: Aktiviere **"Automatically Passthrough Binary Images"** in den Agent Options!

- System Prompt:
  ```
  You are a data analyst who creates concise summaries of documents and datasets.
  
  Given the content of a file, provide:
  1. A brief summary (2-3 sentences)
  2. The top 3 most important points or insights
  3. Key statistics or numbers if present
  4. Any notable patterns or trends
  
  Keep your response concise and actionable.
  Format your response clearly with bullet points.
  ```

- User Prompt:
  ```
  {{ $('When chat message received').item.json.chatInput }}
  
  {{ $('When chat message received').item.json.files.toJsonString() }}
  ```

### 4. Send Response

- Die Antwort wird automatisch über den Chat zurückgeschickt
- Konfiguriere optional eine eigene Antwort-Nachricht

### 4. Test

- Öffne den Chat
- Lade eine Datei (PDF, CSV, etc.) hoch
- Füge eine Frage oder Kontext hinzu (z.B. "Was sind die wichtigsten Punkte?")
- Warte auf die AI-Analyse
- Überprüfe die Antwort

## Learning Objectives

- ✓ Process binary files in N8N
- ✓ Handle file uploads via chat triggers
- ✓ Map binary data correctly with Edit Fields
- ✓ Use AI Agent with "Automatically Passthrough Binary Images"
- ✓ Reference previous nodes correctly in expressions
- ✓ Work with `$input.item.binary.data0` for file handling
- ✓ Use AI for direct document analysis

## Success Criteria

- [ ] Chat trigger accepts file uploads ("Allow File Uploads" enabled)
- [ ] Edit Fields node maps binary data correctly (`binary` = `{{ $input.item.binary.data0 }}`)
- [ ] AI Agent has "Automatically Passthrough Binary Images" enabled
- [ ] User's chat input is correctly referenced: `{{ $('When chat message received').item.json.chatInput }}`
- [ ] File metadata is correctly referenced: `{{ $('When chat message received').item.json.files.toJsonString() }}`
- [ ] AI creates meaningful summary
- [ ] Top 3 points are identified
- [ ] Response is sent back via chat
- [ ] Message is well formatted and readable
