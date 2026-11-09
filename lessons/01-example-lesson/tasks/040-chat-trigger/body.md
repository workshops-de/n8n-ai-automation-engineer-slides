# Chat Trigger - Interactive Weather Chat

## What is a Chat Trigger?

A Chat Trigger responds to messages and commands in chat applications and initiates automated workflows. It is the foundation for creating chatbots and interactive automations.

## Why Chat Trigger?

Create chatbots and interactive automations where users can trigger workflows through natural conversation or specific commands:
- Customer service bots
- Interactive assistants
- Command-based automations
- Conversational interfaces

## Task

Create a chat that responds to city input and returns the weather forecast for that city.

### Step-by-Step Guide

1. **Add Chat Trigger**
   - Add a Chat Trigger Node
   - Keep the default settings

2. **Configure OpenWeatherMap Node**
   - Add the OpenWeatherMap Node
   - Use the OpenWeatherMap credentials (already configured in your N8N environment)
   - Operation: Current Weather
   - Location: Use an expression for the chat input: `{{ $json.chatInput }}`

3. **Format Response**
   - Weather data will be automatically displayed in the chat
   - Optional: Add a Code Node to format the response

4. **Test Chat**
   - Click "Chat" in the top right corner
   - Enter a city (e.g., "Berlin", "Paris", "Tokyo")
   - Observe the weather forecast

## Learning Objectives

- Use Chat Triggers
- Process chat inputs in workflows
- Create interactive workflows
- Format data for chat outputs
