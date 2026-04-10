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
- **Important**: Enable **"Allow File Uploads"** in the Chat Settings
- Users can upload PDF, CSV, or other document files via chat

### 2. Edit Fields - Binary Data Mapping

⚠️ **Important Note**: This Node is necessary to correctly pass the binary data to the AI Agent.

- Add an **Edit Fields (Set)** Node
- Operation: **Add/Modify Fields**
- Add a new field:
  - **Field Name**: `binary`
  - **Field Value**: `{{ $input.item.binary.data0 }}`
- This maps the uploaded file data to the `binary` field that the AI Agent can process

### 3. AI Agent - File Analysis

- Add an **AI Agent** Node

⚠️ **Important**: Enable **"Automatically Passthrough Binary Images"** in the Agent Options!

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

- The response is automatically sent back via chat
- Optionally configure a custom response message

### 4. Test

- Open the chat
- Upload a file (PDF, CSV, etc.)
- Add a question or context (e.g., "What are the most important points?")
- Wait for the AI analysis
- Check the response

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
