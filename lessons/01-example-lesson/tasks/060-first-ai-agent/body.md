# AI Agent - Your First Intelligent Weather Agent

## What is an AI Agent Node?

N8N's AI Agent node can think independently, use tools, and complete complex tasks autonomously. Unlike simple prompt-response patterns, AI agents can break down problems, use multiple tools, and work through multi-step processes like a human assistant.

## Why AI Agents?

AI Agents can:
- Break down problems into sub-steps
- Use multiple tools independently
- Execute multi-step processes
- Make context-based decisions
- Interact with users

## Important: Prompt Engineering

We use Claude for our AI Agents. Claude excels at analytical thinking, following detailed instructions, maintaining consistency, and handling nuanced tasks.

### Prompt Engineering Basics:

1. **Role Definition**: "You are a [specific role] who [key responsibilities/expertise]"
2. **Context**: Structured data for context provision
3. **Task Instruction**: Specific steps and methods

## Task

Create your first AI Agent that can answer weather questions using an OpenWeatherMap tool. The agent should also be able to remember previous queries.

### Step-by-Step Guide

1. **Add Chat Trigger**
   - Create a new workflow
   - Add a Chat Trigger Node

2. **Configure AI Agent Node**
   - Add an AI Agent Node
   - Select Claude as the AI Model
   - Connect it to the Chat Trigger

3. **Add OpenWeatherMap as Tool**
   - Add an OpenWeatherMap Node
   - Use the OpenWeatherMap credentials (already configured in your N8N environment)
   - Operation: Current Weather
   - Connect it as a tool to the AI Agent (Tools Connector)
   - Describe the tool: "Get current weather data for a specific location"

4. **Create System Prompt**
   ```
   You are a helpful weather assistant who provides accurate weather information.
   
   Your task is to:
   1. Understand the user's question about weather
   2. Extract the location from their question
   3. Use the weather tool to get current conditions
   4. Provide a friendly, conversational response with the weather details
   
   Always be polite and helpful. If the user asks about a location, use the weather tool.
   ```

5. **Add Memory**
   - Click on the Memory Connector on the AI Agent
   - Select "Window Buffer Memory" or "Simple Memory"
   - Configure the memory size (e.g., 10 interactions)

6. **Test Agent**
   - Open the chat
   - Ask questions like:
     - "What's the weather like in Paris?"
     - "Will it rain tomorrow in Tokyo?"
     - "How cold is it in Berlin?"
   - Test if the agent remembers previous queries

## Learning Objectives

- Configure AI Agent Nodes
- Set up tools for AI Agents
- Write system prompts
- Implement memory for conversations
- Understand prompt engineering basics
