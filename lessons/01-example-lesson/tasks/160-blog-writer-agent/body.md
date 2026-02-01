# Blog Writer Agent

## Goal

Create an AI Agent that automatically researches information online, writes a blog post about it, and uploads it to Google Docs.

## What You'll Learn

- Using RSS Feeds as data sources
- AI Agents with Research Capabilities
- Text formatting for blogs
- Google Docs Integration
- Content Creation Automation

## Workflow Overview

**Manual Trigger** → **RSS Feed Tool** → **AI Agent** → **Text Formatting** → **Google Docs**

## Step-by-Step Guide

### 1. RSS Feed as Information Source

- Add a **Manual Trigger**
- Add an **RSS Feed Read** Node
- URL Examples:
  - Tech News: `https://techcrunch.com/feed/`
  - AI News: `https://www.artificialintelligence-news.com/feed/`
  - Developer News: `https://dev.to/feed`
- Limit: 1 (newest article)

### 2. AI Agent for Blog Writing

- Add an **AI Agent** Node (Claude recommended)
- System Prompt:
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
- User Prompt:
  ```
  Write a blog post based on this source:
  
  Title: {{ $json.title }}
  Summary: {{ $json.contentSnippet || $json.description }}
  Link: {{ $json.link }}
  
  Research the topic and create an informative, engaging blog post.
  ```

### 3. Add RSS Feed as Tool (Advanced)

For automated research functionality:
- Connect the RSS Feed Node as a tool to the AI Agent
- Tool Description: "Fetch latest news and articles from RSS feeds on specific topics"

### 4. Text Formatting

- Add a **Code Node**
- Format the text for better readability:

```javascript
const blogPost = $input.first().json.output || $input.first().json.text;

// Add metadata
const formattedPost = `
# Blog Post
Generated: ${new Date().toLocaleDateString()}
Source: ${$('RSS Feed Read').item.json.title}

---

${blogPost}

---

Original Source: ${$('RSS Feed Read').item.json.link}
`;

return [{ json: { content: formattedPost, title: $('RSS Feed Read').item.json.title } }];
```

### 5. Set Up Google Docs

- Create a folder in Google Drive for Blog Posts
- Note the Folder ID from the URL

### 6. Google Docs Node

**Option A: Google Docs Node**
- Add a **Google Docs** Node
- Operation: Create Document
- Title: `Blog - {{ $json.title }} - {{ new Date().toISOString().split('T')[0] }}`
- Content: `{{ $json.content }}`

**Option B: Google Drive (as Markdown)**
- Add a **Google Drive** Node
- Operation: Upload
- File Name: `blog-{{ new Date().toISOString().split('T')[0] }}.md`
- File Content: `{{ $json.content }}`

### 7. Optional: Notification

- Add a **Telegram** or **Email** Node
- Notify yourself about the newly created blog post:
  ```
  📝 New Blog Post Created!
  
  Title: {{ $json.title }}
  
  View in Google Docs: [LINK]
  ```

### 8. Test

- Execute the workflow
- Check the created Google Doc
- Validate the quality of the blog post

## Learning Objectives

- ✓ Use RSS Feeds as data sources
- ✓ AI for long-form content creation
- ✓ Implement Markdown formatting
- ✓ Google Docs/Drive Integration
- ✓ Create automated content pipelines

## Success Criteria

- [ ] RSS Feed is successfully read
- [ ] AI generates complete blog post
- [ ] Blog post has clear structure (Intro, Sections, Conclusion)
- [ ] Text is well formatted (Markdown or HTML)
- [ ] Document is created in Google Docs
- [ ] Metadata (Source, Date) is included
- [ ] Blog post is 500-800 words long
