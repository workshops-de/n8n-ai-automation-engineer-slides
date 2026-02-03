# AI Form Data Summarizer

## Goal

Create a feedback form using n8n Form, summarize responses with AI, and save the result to Google Sheets.

## What You'll Learn

- Using n8n Form for data collection
- AI for text summarization
- Field mapping between nodes
- Storing structured data in Sheets
- Implementing sentiment analysis

## Workflow Overview

**n8n Form Trigger** → **AI Agent** → **Google Sheets**

## Step-by-Step Guide

### 1. Create n8n Form Trigger

- Add an **n8n Form Trigger** Node
- This creates a beautiful, ready-to-use form

### 2. Configure Form Fields

In the n8n Form Trigger, add the following fields:

- **Field 1: Name**
  - Type: Text
  - Label: "Your Name"
  - Required: Yes

- **Field 2: Email**
  - Type: Email
  - Label: "Your Email"
  - Required: Yes

- **Field 3: Rating**
  - Type: Number
  - Label: "How would you rate your experience? (1-5)"
  - Required: Yes
  - Min: 1, Max: 5

- **Field 4: Feedback**
  - Type: Textarea
  - Label: "Please share your feedback"
  - Required: Yes
  - Placeholder: "Tell us about your experience..."

### 3. Customize Form (Optional)

- **Form Title**: "Customer Feedback Survey"
- **Form Description**: "We value your feedback! Help us improve."
- **Submit Button Text**: "Submit Feedback"
- **Completion Message**: "Thank you for your feedback!"

### 4. Test Your Form

- Click "Test Form" or copy the form URL
- Fill out the form with sample data
- Submit and observe the data in the node output

### 5. AI Summarization Node

- Add an **AI Agent** or **OpenAI** Node
- System Prompt:
  ```
  You are a data analyst who summarizes customer feedback.
  
  Given customer feedback, create:
  1. A brief 1-2 sentence summary
  2. Key points (bullet list)
  3. Sentiment analysis (positive/negative/neutral)
  4. Action items if any issues mentioned
  
  Output as JSON with this structure:
  {
    "summary": "...",
    "key_points": ["...", "..."],
    "sentiment": "positive/negative/neutral",
    "action_items": ["..."]
  }
  ```
- User Prompt: 
  ```
  Customer: {{ $json.name }}
  Rating: {{ $json.rating }}/5
  Feedback: {{ $json.feedback }}
  ```

### 6. Set Up Google Sheets

- Create a Google Sheet with columns:
  - Timestamp
  - Name
  - Email
  - Original Feedback
  - Summary
  - Sentiment
  - Rating
  - Key Points
  - Action Items

### 7. Configure Google Sheets Node

- Add a **Google Sheets** Node
- Operation: Append Row
- Map the fields:
  - Timestamp: `{{ new Date().toISOString() }}`
  - Name: `{{ $('n8n Form Trigger').item.json.name }}`
  - Email: `{{ $('n8n Form Trigger').item.json.email }}`
  - Original Feedback: `{{ $('n8n Form Trigger').item.json.feedback }}`
  - Summary: `{{ $('AI Agent').item.json.summary }}`
  - Sentiment: `{{ $('AI Agent').item.json.sentiment }}`
  - Rating: `{{ $('n8n Form Trigger').item.json.rating }}`
  - Key Points: `{{ $('AI Agent').item.json.key_points.join('; ') }}`
  - Action Items: `{{ $('AI Agent').item.json.action_items.join('; ') }}`

### 8. Test

- Activate the workflow
- Share the form URL with test users or fill it out yourself multiple times
- Check the Google Sheet for summarized feedback
- Validate the AI summaries and sentiment analysis

## Learning Objectives

- ✓ Create forms with n8n Form Trigger
- ✓ Implement AI summarization
- ✓ Use JSON structures for consistent outputs
- ✓ Field mapping between different data sources
- ✓ Understand sentiment analysis
- ✓ Use Google Sheets as a database

## Success Criteria

- [ ] n8n Form is created with all required fields
- [ ] Form is accessible and user-friendly
- [ ] AI creates structured summary
- [ ] Sentiment is correctly identified
- [ ] Data is saved to Google Sheets
- [ ] All fields are correctly mapped
