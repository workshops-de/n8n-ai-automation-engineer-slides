# AI Name Formatter - Creative Nicknames

## Goal

Create an interactive chat bot that accepts names, generates creative nicknames, and automatically saves them in Google Sheets.

## What You'll Learn

- Chat Trigger for interactive workflows
- AI Agent for creative text generation
- Define tools in the AI Agent
- Direct integration with Google Sheets
- Structured data output

## Workflow Overview

**Chat Trigger** → **AI Agent** → **Google Sheets**

## Step-by-Step Guide

### 1. Set Up Chat Trigger

- Add a **Chat Trigger** Node
- Configure the chat:
  - **Initial Message**: "Hello! I'm your Nickname Generator. Give me a name and I'll create a creative nickname for it! 😄"
  - **Waiting Message**: "Let me think..."
- Make the chat public and copy the Chat URL for testing

### 2. Prepare Google Sheet

Create a Google Sheet with the following columns:
- **Timestamp** - When was the nickname created
- **Original Name** - The entered name
- **Nickname** - The generated nickname
- **Chat Session** - Optional: Session ID

### 3. Set Up AI Agent with Tool

- Add an **AI Agent** Node
- Choose an AI Model (e.g., GPT-4 or Claude)
- Define System Prompt


### 4. Configure Google Sheets Node

- Add a **Google Sheets** Tool
- Operation: **Append Row**
- Select your prepared Google Sheet
- Map the fields

## Learning Objectives

- ✓ Use Chat Trigger for interactive workflows
- ✓ Use AI Agent with tools
- ✓ Define tool schemas with JSON Schema
- ✓ Build creative AI applications
- ✓ Direct database integration with Google Sheets
- ✓ Enforce structured outputs

## Success Criteria

- [ ] Chat Trigger is active and reachable
- [ ] AI Agent generates creative nicknames
- [ ] Each nickname is unique
- [ ] Tool save_nickname works correctly
- [ ] Data is saved in Google Sheets
- [ ] Chat responds in a friendly and interactive way
- [ ] Multiple names can be entered consecutively
