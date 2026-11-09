# AI Welcome Email Personalizer

## Goal

Create a simple registration form with n8n Form that accepts a name and automatically generates and sends a personalized welcome email using an AI Agent.

## What You'll Learn

- Use n8n Form for data collection
- Use AI Agent for personalized text generation
- Pass AI output to Email Nodes
- Implement dynamic personalization

## Workflow Overview

**n8n Form Trigger** → **AI Agent** → **Email**

## Step-by-Step Guide

### 1. Create n8n Form Trigger

- Add an **n8n Form Trigger** Node
- This automatically creates a beautiful, usable form

### 2. Configure Form Fields

Add the following fields in the n8n Form Trigger:

- **Field 1: Name**
  - Type: Text
  - Label: "Your Name"
  - Required: Yes
  - Placeholder: "John Doe"

- **Field 2: Email**
  - Type: Email
  - Label: "Your Email Address"
  - Required: Yes
  - Placeholder: "john@example.com"

### 3. Customize Form

- **Form Title**: "Welcome! Sign up"
- **Form Description**: "Enter your name and receive a personalized welcome email"
- **Submit Button Text**: "Sign Up"
- **Completion Message**: "Thank you! You'll receive an email from us shortly."

### 4. Test Form

- Click "Test Form" or copy the Form URL
- Fill out the form with a test name
- Submit and observe the data in the Node Output

### 5. AI Agent for Email Generation

- Add an **AI Agent** Node
- Choose an AI Model (e.g., GPT-4 or Claude)
- **System Prompt**:
  ```
  You are a friendly onboarding assistant who writes personalized welcome emails.
  
  Create a warm, inviting welcome email that:
  1. Greets the user personally by name
  2. Welcomes them to the platform
  3. Has a motivating, friendly tone
  4. Contains a creative, surprising message (e.g., an inspiring quote, a joke, or a fun fact)
  5. Is brief and concise (max. 150 words)
  
  Output only the email body text, no subject line.
  ```

- **User Prompt**:
  ```
  New user has signed up:
  Name: {{ $json.name }}
  
  Create a personalized welcome email.
  ```

### 6. Configure Email Node

- Add a **Gmail: Send Email** Node and configure it

### 7. Test Workflow

- Activate the workflow
- Fill out the form multiple times with different names
- Check the generated emails
- Validate that each email is personalized and unique

## Learning Objectives

- ✓ Use n8n Forms for data collection
- ✓ Use AI Agent for personalized content generation
- ✓ Pass dynamic data between Nodes
- ✓ Implement email automations
- ✓ Correctly map and use AI output

## Success Criteria

- [ ] n8n Form is created and working
- [ ] Form accepts name and email
- [ ] AI Agent generates personalized welcome emails
- [ ] Each email is unique and contains the name
- [ ] Email is successfully sent
- [ ] Workflow runs end-to-end automatically
