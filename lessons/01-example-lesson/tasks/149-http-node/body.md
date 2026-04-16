# HTTP Node – AI Agent with HTTP Tools

## Goal

Build an AI Agent that uses two HTTP Request nodes as tools: one for querying REST APIs and one for crawling website content. The agent decides autonomously which tool to use based on the user's question.

## What You'll Learn

- Connecting HTTP Request nodes as tools to an AI Agent
- Fetching and interpreting REST API responses
- Crawling website content with "Optimize Response"
- Using ✨ or `$fromAI()` to let the agent dynamically set request parameters


## Step-by-Step Guide

### 1. Set Up the Base Workflow

- Add a **Chat Trigger** node
- Add an **AI Agent** node and connect the Chat Trigger to it
- Add a **Chat Model** (e.g. Claude) to the AI Agent
- Add a **Simple Memory** node to the AI Agent

### 2. Tool 1 – HTTP REST API Request

This tool lets the agent query structured JSON APIs.

- Add an **HTTP Request** node to the canvas
- Connect it to the AI Agent's **Tool** connector
- Set the node name to `HTTP REST API Request`
- Configure the node:
  - **Method:** `GET`
  - **URL:** use the ✨ AI Magic button → `$fromAI('url', 'The full URL of the REST API to call')`
- Leave all other settings at their default

The agent can now call any REST API by providing the URL. Example APIs to try:
- `https://jsonplaceholder.typicode.com/users` – 10 test users with name, email, company
- `https://workshops.de/api/courses` – real course listings from workshops.de

### 3. Tool 2 – HTTP WebSite Crawl

This tool lets the agent extract readable content from any webpage.

- Add a second **HTTP Request** node to the canvas
- Connect it to the AI Agent's **Tool** connector
- Set the node name to `HTTP WebSite Crawl`
- Configure the node:
  - **Method:** `GET`
  - **URL:** use the ✨ AI Magic button → `$fromAI('url', 'The full URL of the website to crawl')`
- Scroll down to **Options** and enable **Optimize Response**:
  - **Expected Response Type:** `HTML`
  - **Selector (CSS):** `body`
  - **Return Only Content:** ✅ enabled

This strips away HTML tags, scripts, and styling – returning only the readable text content of the page, using fewer tokens.

### 4. Add a System Prompt to the Agent

Create your own system prompt in dialog with an chat agent like claude chat etc

### 5. Test the Agent

Open the chat and try these queries:

**REST API queries:**
```
Fetch the list of users from https://jsonplaceholder.typicode.com/users and show me their names and companies.
```
```
What courses are available at https://workshops.de/api/courses?
```

**Website crawl queries:**
```
What is on the homepage of https://workshops.de?
```
```
Summarize the content of https://n8n.io
```