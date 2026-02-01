# Error Handling - Error Handling and Logging

## What is Error Handling?

Error Handling comprises built-in mechanisms in N8N to gracefully handle failures, retry operations, and provide fallback behaviors when workflows encounter problems.

## Why Error Handling?

Error Handling is essential for:
- **Preventing Silent Failures** - Problems won't go unnoticed
- **Instant Notifications** - Quick response to errors
- **System Reliability** - Workflows remain robust
- **Effective Debugging** - Problems can be easily identified

## Task

Create an Error Logger Workflow that catches and logs all errors in your workflows.

### Step-by-Step Guide

1. **Create Error Trigger Workflow**
   - Create a new workflow
   - Name it "Error Logger"
   - Add an "Error Trigger" Node

2. **Analyze Error Information**
   - The Error Trigger automatically receives information about the error
   - Available data:
     - Workflow name
     - Node name that failed
     - Error message
     - Execution ID
     - Timestamp

3. **Implement Error Logging**
   - Option A: Google Sheets Logger
     - Add a Google Sheets Node
     - Create an "Error Log" Sheet
     - Save: Timestamp, Workflow Name, Node, Error Message
   
   - Option B: Email Notification
     - Add an Email Node
     - Send a formatted error email to yourself
   
   - Option C: Slack/Telegram Notification
     - Add a Messaging Node
     - Send instant notifications

4. **Configure Workflow Settings**
   - Go to the Workflow Settings of your test workflow
   - Under "Error Workflow" select your "Error Logger" workflow
   - Save the settings

5. **Provoke and Test Errors**
   - Intentionally create an error (e.g., invalid API key)
   - Check if the Error Logger is triggered
   - Verify the logged information

6. **Catch Tool Errors**
   - For AI Agents: Tool errors must be handled specially
   - Add an IF Node after the AI Agent
   - Check for the word "error" in the response
   - On Error: Use "Stop and Error" Node
   - This will then trigger the Error Workflow

## Discussion Points

Consider:
- What information is useful to save?
- How would you like to be notified?
- What if an error occurred but the execution didn't fail?
- How can you still catch such errors?

## Learning Objectives

✓ Create Error Trigger workflows
✓ Configure Workflow Settings for Error Handling
✓ Extract and log error information
✓ Implement different notification methods
✓ Handle tool errors in AI Agents
