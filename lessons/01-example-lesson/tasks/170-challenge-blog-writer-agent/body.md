# Blog Writer Agent

## Goal

Create an AI Agent that automatically researches information online, writes a blog post about it, and uploads it to Google Docs.

## What You'll Learn

- Using RSS Feeds as data sources
- AI Agents with Research Capabilities
- Text formatting for blogs
- Google Docs Integration
- Content Creation Automation

## Step-by-Step Guide

### 1. RSS Feed as Information Source

- Add a **Manual Trigger** with "Edit Fields Note"
- Add an **RSS Feed Read** Node
- URL Examples:
  - Tech News: `https://techcrunch.com/feed/`
  - AI News: `https://www.artificialintelligence-news.com/feed/`
  - Developer News: `https://dev.to/feed`
- Limit: 1 (newest article)

### 2. AI Agent for Blog Writing

- Add an **AI Agent** Node (Claude recommended)
- System Prompt like this:
  ```
  You are a professional blog writer and content creator.
  
  Given information about a topic, write a comprehensive, engaging blog post.
  
  Your blog post should:
  1. Have a catchy title
  2. Start with an engaging introduction
  3. Include 3-4 main sections with subheadings
  4. Use clear, accessible language
  5. Include practical examples or insights
  6. End with a conclusion and call-to-action
  7. Be 500-800 words
  
  Format your output in Markdown with proper headings.
  ```

### 3. Add RSS Feed as Tool

For automated research functionality:
- Connect the RSS Feed Node as a tool to the AI Agent
- Tool Description: "Fetch latest news and articles from RSS feeds on specific topics"

### 4. Set Up Google Docs

- Create a folder in Google Drive for Blog Posts
- Note the Folder ID from the URL

### 6. Google Docs Node

Create a new google doc file in a folder

**Option A: Google Docs Node**
- Add a **Google Docs** Node
- Operation: Create Document
- Title: `Blog - TITEL - DATUM`


### 7. Optional: Notification

-  **Email** Node
- Notify yourself about the newly created blog post:
  ```
  📝 New Blog Post Created!
  
  Title: [TITLE]
  
  View in Google Docs: [LINK]
  ```