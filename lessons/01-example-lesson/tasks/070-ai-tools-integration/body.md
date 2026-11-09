# AI Tools - Multi-Tool AI Assistant

## What are AI Tools?

AI Tools are external services and APIs that your AI Agent can use as needed. Tools give your agent capabilities beyond pure text generation - it can fetch data, perform calculations, search databases, and interact with other systems.

## Why AI Tools?

Tools significantly expand your agent's capabilities:
- Data retrieval from various sources
- Calculations and data processing
- Database access
- Integration with business systems
- Automatic tool selection based on context

## Popular Tools in N8N

- **Google Sheets** - Read/write spreadsheet data
- **Slack / Microsoft Teams / Telegram** - Send messages
- **Email (SMTP/IMAP/Gmail)** - Send and receive emails
- **HTTP Request** - API integrations for services without direct integration
- And hundreds more!

## Task

Create an AI Assistant with 3 tools: Weather Lookup, Google Sheets, and HTTP Request. The agent should automatically select the right tool based on user questions.

### Step-by-Step Guide

1. **Create Workflow Base**
   - Create a new workflow
   - Add a Chat Trigger
   - Add an AI Agent Node (Claude)
   - Add Memory

2. **Tool 1: Weather Lookup**
   - Add an OpenWeatherMap Node
   - Use the OpenWeatherMap credentials (already configured in your N8N environment)
   - Connect it as a tool to the AI Agent
   - Tool Description: "Get current weather information for any city"

3. **Tool 2: Google Sheets**
   - Create a test Google Sheet with some data
   - Add a Google Sheets Node
   - Configure your Google Credentials
   - Operation: Read or Append
   - Connect as tool
   - Tool Description: "Read or write data to a spreadsheet"

4. **Tool 3: HTTP Request**
   - Add an HTTP Request Node
   - Configure it for a public API (e.g., JSONPlaceholder)
   - URL: `https://jsonplaceholder.typicode.com/users`
   - Method: GET
   - Connect as tool
   - Tool Description: "Fetch user data from an external API"

5. **Write System Prompt**
   ```
   You are a versatile AI assistant with access to multiple tools.
   
   Available tools:
   1. Weather Tool - For weather information about cities
   2. Google Sheets - For reading or writing spreadsheet data
   3. HTTP Request - For fetching external data
   
   Your task is to:
   1. Understand what the user needs
   2. Choose the appropriate tool(s) to help them
   3. Use the tools to gather information
   4. Provide clear, helpful responses
   
   Always explain what you're doing and which tool you're using.
   ```

6. **Test Agent**
   - Test with different questions:
     - "What's the weather in London?"
     - "Can you read the data from my spreadsheet?"
     - "Fetch some user data"
   - Observe how the agent selects the right tool

## Learning Objectives

- ✓ Connect multiple tools to an AI Agent
- ✓ Write effective tool descriptions
- ✓ Understand automatic tool selection
- ✓ Integrate different API types
- ✓ Connect Google Sheets with N8N
