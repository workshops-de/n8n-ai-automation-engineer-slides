# AI Welcome Email Personalizer

## Goal

Create a workflow that is automatically triggered when a new user signs up and uses AI to generate a personalized welcome email.

## What You'll Learn

- Webhook Triggers for form integrations
- Using AI for text generation
- Mapping AI output to Email Nodes
- Personalization through dynamic data

## Workflow Overview

**Trigger** → **AI Agent** → **Email**

## Step-by-Step Guide

### 1. Set Up Webhook (Alternative to Typeform)

Since Typeform requires an account, we'll use a simple webhook:

- Add a **Webhook Trigger**
- Method: POST
- Path: `/signup`
- Note the Webhook URL

### 2. Send Test Data

Use a tool like Postman or curl to send test data:

```json
{
  "name": "Max Mustermann",
  "email": "max@example.com",
  "interests": "AI and automation"
}
```

### 3. AI Agent for Email Generation

- Add an **AI Agent Node** (or OpenAI Chat Model)
- Configure Claude/GPT
- System Prompt:
  ```
  You are a friendly onboarding assistant who writes personalized welcome emails.
  
  Given a new user's information, create a warm, engaging welcome email that:
  1. Greets them by name
  2. Welcomes them to the platform
  3. References their stated interests
  4. Includes a fun fact related to their interests
  5. Keeps the tone friendly and encouraging
  
  Output only the email body text, ready to send.
  ```
- User Prompt: `New user signed up: Name: {{ $json.name }}, Email: {{ $json.email }}, Interests: {{ $json.interests }}`

### 4. Configure Email Node

- Add a **Send Email** Node
- Configure SMTP Credentials (Gmail, Outlook, etc.)
- To: `{{ $('Webhook').item.json.email }}`
- Subject: `Welcome to our platform, {{ $('Webhook').item.json.name }}!`
- Text: `{{ $('AI Agent').item.json.output }}` (or according to your AI Node output)

### 5. Test Workflow

- Activate the workflow
- Send a POST request to the webhook
- Check the generated email

## Learning Objectives

✓ Use webhooks for external integrations
✓ Use AI for personalized content generation
✓ Pass dynamic data between nodes
✓ Implement email automations

## Success Criteria

- [ ] Webhook receives user data
- [ ] AI generates personalized email
- [ ] Email contains username and interests
- [ ] Email is successfully sent
