# AI-Powered Application Evaluation

## Goal

Create an application form with n8n Form, have the applications automatically evaluated by an AI Agent, and save the results in Google Sheets.

## What You'll Learn

- Create application forms with n8n Form
- Use AI Agent for automatic application evaluation
- Perform structured AI analyses with tools
- Field mapping between different Nodes
- Save data in Google Sheets

## Workflow Overview

**n8n Form Trigger** → **AI Agent** → **Google Sheets**

## Step-by-Step Guide

### 1. Create n8n Form Trigger

- Add an **n8n Form Trigger** Node
- This automatically creates a professional application form

### 2. Configure Form Fields

Add the following fields in the n8n Form Trigger:

- **Field 1: Name**
  - Type: Text
  - Label: "Full Name"
  - Required: Yes

- **Field 2: Email**
  - Type: Email
  - Label: "Email Address"
  - Required: Yes

- **Field 3: Position**
  - Type: Text
  - Label: "Desired Position"
  - Required: Yes
  - Placeholder: "e.g. Senior Developer, Marketing Manager..."

- **Field 4: Work Experience**
  - Type: Number
  - Label: "Years of Work Experience"
  - Required: Yes
  - Min: 0, Max: 50

- **Field 5: Cover Letter**
  - Type: Textarea
  - Label: "Your Cover Letter / Motivation"
  - Required: Yes
  - Placeholder: "Why do you want to work with us? What are your strengths?"

- **Field 6: Qualifications**
  - Type: Textarea
  - Label: "Relevant Skills and Qualifications"
  - Required: Yes
  - Placeholder: "Describe your most important skills, technologies, certifications..."

### 3. Customize Form (Optional)

- **Form Title**: "Online Application"
- **Form Description**: "We look forward to your application! Fill out the form and our AI system will analyze your application."
- **Submit Button Text**: "Submit Application"
- **Completion Message**: "Thank you for your application! We'll be in touch shortly."

### 4. Test Form

- Click "Test Form" or copy the Form URL
- Fill out the form with sample data
- Submit and observe the data in the Node Output

### 5. Set Up AI Agent Node

- Add an **AI Agent** Node
- Choose an AI Model
- **System Prompt** (in the Agent):
  ```
  You are an experienced HR specialist who professionally evaluates applications.
  
  Analyze the application carefully and create a structured evaluation.
  Be objective, fair, and constructive.
  ```

### 6. Prepare Google Sheet

Create a Google Sheet with the following columns:
- Timestamp
- Name
- Email
- Position
- Work Experience
- Overall Rating
- Recommendation
- Summary
- Strengths
- Weaknesses
- Experience (1-10)
- Motivation (1-10)
- Skills (1-10)

### 7. Configure Google Sheets Node

- Add a **Google Sheets** Node
- Operation: **Append Row**
- Select your Google Sheet
- Map the fields

### 8. Test Workflow

- Activate the workflow
- Fill out the form multiple times with different applicant profiles:
  - A strong application
  - A weak application
  - An average application
- Check the Google Sheet for complete evaluations
- Validate whether the AI Agent evaluates consistently and fairly

## Learning Objectives

- ✓ Create complex forms with n8n Form
- ✓ Use AI Agent with tools for structured outputs
- ✓ Define tool schemas with JSON Schema
- ✓ Build automated evaluation systems
- ✓ Perform multi-dimensional analyses
- ✓ Use Google Sheets as a database

## Success Criteria

- [ ] Application form created with all fields
- [ ] AI Agent configured with save_evaluation tool
- [ ] Evaluations are output in a structured format
- [ ] Recommendations (INVITE/REJECT/WAITLIST) are set correctly
- [ ] All evaluation data ends up in Google Sheets
- [ ] Workflow runs end-to-end
