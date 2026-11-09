# Webhook Trigger - Weather Query via URL Parameter

## What is a Webhook Trigger?

A Webhook Trigger listens for incoming HTTP requests and starts workflows when external services send data to your N8N webhook URL. This enables real-time integrations.

## Why Webhook Trigger?

Perfect for real-time integrations where external applications need to instantly notify your N8N workflows about events:
- Form submissions
- Payment confirmations
- API updates
- External event notifications

## Task

Create a webhook that returns the current weather forecast for a city passed as a URL parameter.

### Step-by-Step Guide

1. **Create Webhook Trigger**
   - Add a Webhook Trigger Node
   - HTTP Method: GET
   - Path: `/weather` (or any path)
   - Copy the generated webhook URL

2. **Extract URL Parameters**
   - Query parameters are automatically made available in the Webhook Node
   - The `location` parameter will be available at `$json.query.location`

3. **Configure OpenWeatherMap Node**
   - Add the OpenWeatherMap Node
   - Use the OpenWeatherMap credentials (already configured in your N8N environment)
   - Operation: Current Weather
   - Location: Use an expression: `{{ $json.query.location }}`

4. **Test Workflow**
   - Activate the workflow
   - Open the webhook URL in your browser: `[YOUR_URL]?location=Berlin`
   - Test with different cities

## Learning Objectives

- Configure Webhook Triggers
- Process URL parameters
- Use expressions in N8N
- Understand HTTP GET requests
