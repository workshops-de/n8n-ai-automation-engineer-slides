# Hints

## ⚠️ Gmail Node Limitation

**Warning: Gmail-Tool will Error with other Mail-Hosts**

- ✅ `@gmail.com` addresses will work fine
- ❌ If you embedded your old email account into Gmail, you need to use **SMTP Node** instead
- ❌ Examples: `@hotmail.com`, `@gmx.de`, `@web.de`

The Gmail Node only works with native Gmail addresses. For other email providers, even if managed through Gmail, use the SMTP Node.

---

## System Prompt Example

If you need help with the System Prompt, here is a working example:

```
You are a Social Media Content Creator who creates posts and saves them as documents.

You receive Topic and Platform from a Google Form submission.

Your task:
1. Analyze the submitted topic
2. Create a suitable post for the specified platform
3. Save the post as a Google Doc
4. Update the row in Google Sheets with Doc URL and Status

Rules for Twitter (max 280 characters):
- Short and concise
- 1-2 relevant hashtags
- Include a hook or question

Rules for LinkedIn (max 300 characters):
- Professional tone
- Provide value or insight
- Relevant hashtags
- Call-to-action

Workflow:
1. Generate the post based on Topic and Platform
2. Use Google Docs Tool: Title = "[Platform] - [Topic] - [Date]"
3. Use Google Sheets Update Tool (Status='Generated', Document URL, Generated Date)
```

You can customize and improve this prompt! Experiment with different formulations.

---

## AI Agent with Multiple Tools

The key to this challenge is the correct configuration of the AI Agent with tools:

### Understanding Tool Order

The AI Agent decides itself when to use which tool. Important:
1. **Input from Trigger**: Agent receives Topic and Platform directly from the Google Sheets Trigger
2. **Google Docs Tool**: Agent creates a document with the generated post
3. **Google Sheets Update Tool**: Agent uses this at the end to enter Status and Doc URL

### System Prompt is Crucial

Your System Prompt must clearly tell the agent:
- **What** it should do (read topic, create post, publish, update)
- **When** to use which tool
- **How** the data is structured

### Common Errors

**"Trigger doesn't fire"**
- Check if the workflow is activated
- Test with a form submit
- Look at the execution history in n8n
- Check if the correct sheet and tab is selected

**"Agent doesn't receive data from trigger"**
- The trigger data is available in `$json`
- Example: `{{ $json.Topic }}` and `{{ $json.Platform }}`
- Check in the System Prompt whether you reference this data

**"Agent creates Doc, but doesn't update the Sheet"**
- The agent must know **which row** to update
- Tip: The Row ID comes from the trigger
- System Prompt: Explicitly mention that it should update the sheet after creating the doc
- Check if the agent gets the Document URL from the Google Docs Tool

**"Google Doc is created but empty"**
- Check if the agent actually writes the generated post text to the doc
- Tool Description must be clear: "Include the full post text in the document"
- System Prompt: Emphasize that the COMPLETE post should be in the doc

**"Posts are too long/short"**
- Reinforce the character limits in the System Prompt
- Example: "Twitter: MAXIMUM 280 characters! Shorten the text if necessary."

### Testing Tips

1. Activate the workflow
2. Fill out the Google Form with a simple test topic
3. Check the n8n Execution History - was the workflow triggered?
4. Look at the AI Agent logs to see which tools it uses
5. After each run, check whether the row in the sheet was updated

### Tool Description Examples

**Google Docs Tool:**
```
Create a new Google Doc with the generated social media post. Use title format: '[Platform] - [Topic] - [Current Date]'. The document should contain the complete post text formatted nicely.
```

**Google Sheets Update Tool:**
```
Update the Google Sheet row that triggered this workflow. Set: Status='Generated', Document URL=(the URL of the created Google Doc), Generated Date=(current date).
```

## Debugging

If the workflow doesn't work:
1. Open the AI Agent Execution Logs
2. See which tools the agent actually called
3. Check the tool responses: Is data coming back?
4. Refine the System Prompt based on the agent behavior

---

## Bonus: Human-in-the-Loop Hints

If you're doing the Human Review Bonus Challenge:

### System Prompt Example with Human Review

```
You are a Social Media Expert who creates posts and submits them for approval.

Your task:
1. Fetch unposted topics from Google Sheets
2. Create a suitable post for the specified platform
3. Send the post via email for human review (Gmail Send and Wait Tool)
4. Wait for approval (Approve/Reject)
5. IF APPROVED: Publish the post on the correct platform
6. IF APPROVED: Mark the topic in Google Sheets as "Posted"
7. IF REJECTED: Abort without posting

IMPORTANT: Workflow order
1. Google Sheets Read Tool
2. Generate Post Content
3. Gmail Send and Wait Tool (WAIT for response!)
4. ONLY on Approval: Twitter/LinkedIn Tool
5. ONLY on Approval: Google Sheets Update Tool
```

### Tool Description: Gmail Send and Wait

```
Send an email for human review and WAIT for approval/rejection. Include the generated post text, topic name, and target platform. The workflow will pause until the recipient clicks Approve or Reject in the email.
```

### Common Errors with Human Review

**"Agent posts without waiting for approval"**
- Check tool descriptions: Are Twitter/LinkedIn tools clearly marked as "ONLY after approval"?
- System Prompt: Emphasize the order in CAPITAL LETTERS
- Tip: Use words like "WAIT", "ONLY IF APPROVED"

**"Gmail Send and Wait doesn't work"**
- Gmail OAuth2 must be correctly connected
- Email address must be @gmail.com (not @hotmail, @gmx, etc.)
- Approve/Reject options must be configured in the Node
- The agent must explicitly know that it should wait for the response
