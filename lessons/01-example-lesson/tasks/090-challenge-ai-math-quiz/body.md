# AI Math Quiz Evaluator

## Goal

Create a simple math quiz form with n8n Form. Participants answer a few basic math questions, and an AI Agent automatically evaluates their answers and writes a short, friendly feedback message. The results are saved to Google Sheets.

## What You'll Learn

- Build forms with n8n Form
- Pass form data to an AI Agent
- Use AI for structured evaluation with natural language feedback
- Map data between nodes
- Save results to Google Sheets

## Workflow Overview

**n8n Form Trigger** → **AI Agent** → **Google Sheets**

## Step-by-Step Guide

### 1. Create n8n Form Trigger

- Add an **n8n Form Trigger** Node
- This automatically generates a clean, usable form

### 2. Configure Form Fields

Add the following fields in the n8n Form Trigger:

- **Field 1: Name**
  - Type: Text
  - Label: "Your Name"
  - Required: Yes
  - Placeholder: "Jane Doe"

- **Field 2: Question 1**
  - Type: Number
  - Label: "What is 10 + 10?"
  - Required: Yes

- **Field 3: Question 2**
  - Type: Number
  - Label: "What is 100 + 100?"
  - Required: Yes

- **Field 4: Question 3**
  - Type: Number
  - Label: "What is 22 × 22?"
  - Required: Yes

### 3. Customize Form

- **Form Title**: "Quick Math Quiz"
- **Form Description**: "Answer these three short questions — our AI will evaluate your results!"
- **Submit Button Text**: "Submit"
- **Completion Message**: "Thanks! Your results are being evaluated."

### 4. Test the Form

- Click "Test Form" or copy the Form URL
- Fill it in with some answers (correct and incorrect)
- Submit and inspect the Node Output to see the field names

### 5. Set Up the AI Agent Node

- Add an **AI Agent** Node
- Choose an AI Model (e.g., Claude or GPT-4)
- **System Prompt**:
  ```
  You are a friendly math quiz evaluator.

  You receive the name of a participant and their answers to three math questions.
  The correct answers are:
  - 10 + 10 = 20
  - 100 + 100 = 200
  - 22 × 22 = 484

  Your task:
  1. Check each answer (correct or incorrect)
  2. Count how many answers are correct (0–3)
  3. Write a short, encouraging feedback message (2–4 sentences) addressed to the participant by name
  4. Adjust the tone based on the score:
     - 3/3: enthusiastic praise
     - 2/3: positive with a small hint
     - 1/3 or 0/3: friendly encouragement to try again

  Keep the feedback concise and friendly.
  ```

- **User Prompt**:
  ```
  Participant: {{ $json.name }}

  Their answers:
  - 10 + 10 = {{ $json['What is 10 + 10?'] }}
  - 100 + 100 = {{ $json['What is 100 + 100?'] }}
  - 22 × 22 = {{ $json['What is 22 × 22?'] }}

  Please evaluate their answers and write a short feedback.
  ```

  > 💡 **Tip:** Check the exact field names by inspecting the Form Trigger output — they match the labels you set.

### 6. Prepare Google Sheet

Create a Google Sheet with the following columns:
- Timestamp
- Name
- Answer Q1 (10+10)
- Answer Q2 (100+100)
- Answer Q3 (22×22)
- Score (0–3)
- Feedback

### 7. Configure Google Sheets Node

- Add a **Google Sheets** Node
- Operation: **Append Row**
- Select your Google Sheet
- Map the fields from the Form Trigger and the AI Agent output

### 8. Test the Workflow

- Activate the workflow
- Submit the form a few times with different answers:
  - All correct
  - Some correct
  - All wrong
- Check the Google Sheet for the saved results
- Read the AI-generated feedback and see how it adapts

## Learning Objectives

- ✓ Build n8n Forms for structured data collection
- ✓ Pass form data to an AI Agent via expressions
- ✓ Write effective system prompts for evaluation tasks
- ✓ Map AI output to downstream nodes
- ✓ Save structured results to Google Sheets

## Success Criteria

- [ ] n8n Form is created with all 4 fields
- [ ] Form data is correctly passed to the AI Agent
- [ ] AI Agent evaluates answers and produces feedback
- [ ] Feedback tone changes based on the score
- [ ] Results are saved to Google Sheets
- [ ] Workflow runs end-to-end automatically
