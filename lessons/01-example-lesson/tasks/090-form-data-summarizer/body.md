# AI Form Data Summarizer

## Goal

Receive form responses submitted via webhook, summarize them with AI, and save the result to Google Sheets.

## What You'll Learn

- Using AI for text summarization
- Field mapping between nodes
- Storing structured data in Sheets
- Implementing sentiment analysis

## Workflow Overview

**Webhook** → **AI Agent** → **Google Sheets**

## Step-by-Step Guide

### 1. Create Webhook Trigger

- Add a **Webhook Trigger**
- Method: POST
- Path: `/feedback`
- The webhook will receive feedback form data

### 2. Test Form Data

Example POST Body:
```json
{
  "name": "Anna Schmidt",
  "email": "anna@example.com",
  "feedback": "I really love the new features! The AI integration is amazing and saves me so much time. However, the interface could be a bit more intuitive for beginners.",
  "rating": 4
}
```

### 3. AI Summarization Node

- Add an **AI Agent** or **OpenAI** Node
- System Prompt:
  ```
  You are a data analyst who summarizes customer feedback.
  
  Given customer feedback, create:
  1. A brief 1-2 sentence summary
  2. Key points (bullet list)
  3. Sentiment analysis (positive/negative/neutral)
  4. Action items if any issues mentioned
  
  Output as JSON with this structure:
  {
    "summary": "...",
    "key_points": ["...", "..."],
    "sentiment": "positive/negative/neutral",
    "action_items": ["..."]
  }
  ```
- User Prompt: 
  ```
  Customer: {{ $json.name }}
  Rating: {{ $json.rating }}/5
  Feedback: {{ $json.feedback }}
  ```

### 4. Set Up Google Sheets

- Create a Google Sheet with columns:
  - Timestamp
  - Name
  - Email
  - Original Feedback
  - Summary
  - Sentiment
  - Rating
  - Key Points
  - Action Items

### 5. Configure Google Sheets Node

- Add a **Google Sheets** Node
- Operation: Append Row
- Map the fields:
  - Timestamp: `{{ new Date().toISOString() }}`
  - Name: `{{ $('Webhook').item.json.name }}`
  - Email: `{{ $('Webhook').item.json.email }}`
  - Original Feedback: `{{ $('Webhook').item.json.feedback }}`
  - Summary: `{{ $('AI Agent').item.json.summary }}`
  - Sentiment: `{{ $('AI Agent').item.json.sentiment }}`
  - Rating: `{{ $('Webhook').item.json.rating }}`
  - Key Points: `{{ $('AI Agent').item.json.key_points.join('; ') }}`
  - Action Items: `{{ $('AI Agent').item.json.action_items.join('; ') }}`

### 6. Test

- Send different feedback examples
- Check the Google Sheet
- Validate the AI summaries

## Learning Objectives

✓ Implement AI summarization
✓ Use JSON structures for consistent outputs
✓ Field mapping between different data sources
✓ Understand sentiment analysis
✓ Use Google Sheets as a database

## Success Criteria

- [ ] Webhook receives feedback data
- [ ] AI creates structured summary
- [ ] Sentiment is correctly identified
- [ ] Data is saved to Google Sheets
- [ ] All fields are correctly mapped
