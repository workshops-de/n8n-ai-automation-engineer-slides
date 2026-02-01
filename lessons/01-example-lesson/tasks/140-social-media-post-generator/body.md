# AI Social Media Post Generator

## Goal

Automatically generate social media posts from topics stored in Google Sheets and schedule them for Twitter (X) or LinkedIn.

## What You'll Learn

- Scheduled Workflows (Cron)
- AI Content Generation
- Dynamic Posting
- Social Media Integration
- Google Sheets as Content Source

## Workflow Overview

**Schedule (Cron)** → **Google Sheets** → **AI** → **Twitter (X) or LinkedIn**

## Step-by-Step Guide

### 1. Prepare Google Sheet

Create a Google Sheet with the following columns:
- Topic (e.g., "AI in Healthcare", "Remote Work Tips")
- Platform (Twitter, LinkedIn, or Both)
- Posted (TRUE/FALSE)
- Post Date
- Generated Post

Add some topics:
```
Topic: AI and Automation in 2024
Platform: Twitter
Posted: FALSE

Topic: Best Practices for Remote Teams
Platform: LinkedIn
Posted: FALSE
```

### 2. Set Up Schedule Trigger

- Add a **Schedule Trigger**
- For testing: Every day at 10:00 AM
- Cron Expression: `0 10 * * *`
- Or for more frequent testing: `*/15 * * * *` (every 15 minutes)

### 3. Google Sheets Node - Fetch Topics

- Add a **Google Sheets** Node
- Operation: Read Rows
- Range: All rows
- Filter: Only rows where `Posted = FALSE`

### 4. Add Condition

- Add an **IF Node**
- Condition: Check if topics are available
- If no unposted topics: End workflow

### 5. AI Content Generation

- Add an **AI Agent** or **OpenAI** Node
- System Prompt:
  ```
  You are a social media expert who creates engaging posts.
  
  Rules for Twitter (max 280 characters):
  - Keep it concise and punchy
  - Use 1-2 relevant hashtags
  - Include a hook or question
  
  Rules for LinkedIn (max 3000 characters, but keep under 300):
  - Professional tone
  - Add value or insight
  - Include relevant hashtags
  - Call to action
  
  Output only the post text, ready to publish.
  ```
- User Prompt:
  ```
  Platform: {{ $json.Platform }}
  Topic: {{ $json.Topic }}
  
  Create an engaging post about this topic.
  ```

### 6. Set Up Social Media Node

**Option A: Twitter (X)**
- Add a **Twitter** Node
- Operation: Create Tweet
- Text: `{{ $('AI').item.json.output }}`

**Option B: LinkedIn**
- Add a **LinkedIn** Node
- Operation: Create Post
- Text: `{{ $('AI').item.json.output }}`

**Tip**: You can use a Switch/Router Node to automatically choose the right network based on the platform.

### 7. Google Sheets Update

- Add another **Google Sheets** Node
- Operation: Update Row
- Update:
  - Posted: TRUE
  - Post Date: `{{ new Date().toISOString() }}`
  - Generated Post: `{{ $('AI').item.json.output }}`

### 8. Activate and Test Workflow

- Activate the workflow
- Wait for the next scheduled execution
- Or execute manually for testing

## Learning Objectives

- ✓ Implement scheduled workflows with Cron
- ✓ Use AI for content generation
- ✓ Dynamic posting based on data
- ✓ Platform-specific content rules
- ✓ Google Sheets as Content Management System

## Success Criteria

- [ ] Schedule Trigger runs automatically
- [ ] Topics are read from Google Sheets
- [ ] AI generates platform-specific posts
- [ ] Posts are published on social media
- [ ] Google Sheets is updated
- [ ] No duplicates are posted
