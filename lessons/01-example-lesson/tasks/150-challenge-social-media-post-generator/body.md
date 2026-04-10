# AI Social Media Post Generator

## Goal

Create a fully automated content generator workflow triggered via Google Forms. Users can submit topics through a form, the AI Agent generates a social media post, and saves it as a Google Doc.

## What You'll Learn

- Google Forms as input source
- Google Sheets Trigger (on new row)
- AI Agent with Google Docs Tool
- Content generation with platform-specific rules
- Event-driven AI workflows
- Google Drive Integration

## Workflow Overview

**Google Form** → **Google Sheets** → **Google Sheets Trigger** → **AI Agent** → **Google Doc**

## Step-by-Step Guide

### 1. Create Google Form

Create a Google Form with the following fields:

**Field 1: Topic**
- Type: Short answer
- Required: Yes
- Description: "What topic should a social media post be created about?"
- Example: "AI in Healthcare", "Remote Work Tips"

**Field 2: Platform**
- Type: Multiple Choice
- Options: Twitter, LinkedIn, Both
- Required: Yes

**Form Settings:**
- Link the form to a new Google Sheet
- Google Forms automatically creates a sheet with the responses
- The sheet automatically gets columns: Timestamp, Topic, Platform

### 2. Extend Google Sheet

Open the linked Google Sheet and add additional columns:
- **Status** (for tracking: Generated, Posted, etc.)
- **Document URL** (link to the Google Doc)
- **Generated Date** (when it was generated)

Your sheet now has:
- Timestamp (automatically from Google Forms)
- Topic (from form)
- Platform (from form)
- Status (manually added)
- Document URL (manually added)
- Generated Date (manually added)

### 3. Set Up Google Sheets Trigger

- Add a **Google Sheets Trigger**
- Trigger: **On Row Added**
- Select your Google Sheet
- Sheet: The sheet with the form responses (usually "Form responses 1")
- This trigger fires automatically when someone fills out the form!

### 4. Configure AI Agent with Tools

- Add an **AI Agent** Node
- Choose a capable model (GPT-4, Claude, etc.)

**Create System Prompt:**

The System Prompt is the most important part of this challenge! It must clearly explain to the AI Agent:
- What its task is
- Which tools it should use
- What rules apply for the different platforms
- How it should process the data from Google Sheets

💡 **Tip:** Use ChatGPT or Claude to create the perfect System Prompt!

For example ask:
> "I'm building an n8n workflow with an AI Agent that creates social media posts. The agent has tools for: Google Sheets (Read), Twitter, LinkedIn, and Google Sheets (Update). Create a System Prompt that explains to the agent how to autonomously read topics from the sheet, generate, publish, and update the sheet. Twitter max 280 characters, LinkedIn max 300 characters."

Experiment with different prompt variations and test which works best!

**User Prompt:**
```
A new topic was submitted via the Google Form:

Topic: {{ YOU NEED TO FILL IN SOMETHING HERE 😉 }}
Platform: {{ YOU NEED TO FILL IN SOMETHING HERE 😉 }}

Create a suitable social media post, save it as a Google Doc and update the Google Sheet with the Doc link.
```

### 5. Prepare Google Drive Folder

- Create a folder in Google Drive for the generated posts
- Example: "AI Social Media Posts"
- Note the Folder ID from the URL (Optional, for better organization)

### 6. Add Tools to AI Agent

Add the following tools to the AI Agent:

**Tool 1: Google Docs (Create)**
- Node: Google Docs
- Operation: Create Document
- Purpose: Save post as Google Doc
- Tool Description: "Create a new Google Doc with the generated social media post. Title format: '[Platform] - [Topic] - [Date]'. Include the full post text in the document."

**Tool 2: Google Sheets (Update)**
- Node: Google Sheets
- Operation: Update Row
- Purpose: Update row with status and doc link
- Tool Description: "Update the Google Sheet row that triggered the workflow. Set Status='Generated', add Document URL and Generated Date."

### 7. Activate and Test Workflow

- Activate the workflow
- Open your Google Form
- Fill out the form with a test topic:
  - Topic: "AI in Healthcare"
  - Platform: Twitter
- Submit the form
- The workflow starts automatically!
- Watch how the AI Agent:
  1. Receives the new row from the trigger
  2. Generates a post for the topic (platform-specific)
  3. Creates a Google Doc with the post
  4. Updates the row in the sheet (Status, Doc URL, Date)
- Open the Google Doc and check the generated post!

## Learning Objectives

- ✓ Use Google Forms as input source
- ✓ Set up Google Sheets Trigger (On Row Added)
- ✓ Create event-driven workflows
- ✓ AI Agent with Google Docs Tool
- ✓ Programmatically create Google Docs
- ✓ Use Google Sheets Update as tool
- ✓ Platform-specific content rules in AI prompts

## Success Criteria

- [ ] Google Form is created and linked to Google Sheet
- [ ] Google Sheets Trigger (On Row Added) is configured
- [ ] Form submission automatically triggers the workflow
- [ ] AI Agent receives Topic and Platform from the new row
- [ ] AI Agent generates platform-specific posts
- [ ] AI Agent creates Google Doc with the post
- [ ] Google Doc has a meaningful title and correct content
- [ ] AI Agent updates sheet with Doc URL and Status
- [ ] Entire workflow runs event-driven and autonomously
