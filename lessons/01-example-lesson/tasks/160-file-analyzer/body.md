# AI File Analyzer

## Goal

Download a PDF/CSV/JSON file, use AI to summarize its contents, and send a Telegram notification with the key insights.

## What You'll Learn

- Binary File Handling
- AI Summarization
- Messaging Integration (Telegram)
- Processing different file formats

## Workflow Overview

**HTTP Request (Download File)** → **Extract Data** → **AI Summarization** → **Telegram**

## Step-by-Step Guide

### 1. HTTP Request - Download File

- Add a **Manual Trigger**
- Add an **HTTP Request** Node
- Choose a public test file:

**Option A: PDF**
```
URL: https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf
Method: GET
Response Format: File
```

**Option B: CSV**
```
URL: https://raw.githubusercontent.com/datasets/covid-19/master/data/countries-aggregated.csv
Method: GET
Response Format: File
```

**Option C: JSON**
```
URL: https://jsonplaceholder.typicode.com/posts
Method: GET
Response Format: JSON
```

### 2. Extract Data

**For PDF:**
- Add an **Extract from File** Node
- Select "Extract from PDF"

**For CSV:**
- Add a **Spreadsheet File** Node
- Operation: Read from File

**For JSON:**
- No extraction needed, data is already in JSON format

### 3. Prepare Data

- Add a **Code Node** (optional)
- Convert data into a readable string:

```javascript
// For CSV or JSON
const data = $input.all();
const content = JSON.stringify(data.slice(0, 10), null, 2); // First 10 items
return [{ json: { content } }];
```

### 4. AI Summarization

- Add an **AI Agent** Node
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
  Analyze and summarize this file content:
  
  {{ $json.content || $json.text }}
  ```

### 5. Set Up Telegram Bot

If not already done:
- Create a bot with @BotFather in Telegram
- Note the Bot Token
- Start a chat with your bot
- Note your Chat ID (use @userinfobot)

### 6. Send Telegram Notification

- Add a **Telegram** Node
- Operation: Send Message
- Chat ID: Your Chat ID
- Text:
  ```
  📄 File Analysis Report
  
  {{ $('AI Agent').item.json.output }}
  
  Analyzed at: {{ new Date().toLocaleString() }}
  ```

### 7. Test

- Execute the workflow
- Check the Telegram notification
- Validate the summary

## Learning Objectives

- ✓ Process binary files in N8N
- ✓ Handle different file formats (PDF, CSV, JSON)
- ✓ Use AI for document summarization
- ✓ Integrate Telegram for notifications
- ✓ Automate file download and processing

## Success Criteria

- [ ] File is successfully downloaded
- [ ] Content is correctly extracted
- [ ] AI creates meaningful summary
- [ ] Top 3 points are identified
- [ ] Telegram notification is received
- [ ] Message is well formatted and readable
