# Bonus Challenges

## 1. Automatic Rejection/Invitation Email

Extend the workflow with an Email Node that automatically:
- For **INVITE**: Sends an invitation to an interview
- For **REJECT**: Sends a polite rejection with constructive feedback
- For **WAITLIST**: Sends an informational email that the application has been saved

Use personalized emails with data from the AI evaluation.

## 2. Multi-Stage Evaluation

Implement a two-stage evaluation system:
- **Stage 1**: Quick automatic pre-selection (current AI Agent)
- **Stage 2**: Only top applications (Score ≥ 8) are forwarded to a second, more detailed AI Agent

The second agent could:
- Ask more in-depth questions about motivation
- Evaluate specific technical skills
- Analyze cultural fit

## 3. Ranking and Dashboard

- Create a second Google Sheet tab "Rankings"
- Automatically sort all applicants by score
- Add conditional formatting:
  - Green for Score ≥ 8
  - Yellow for Score 6-7
  - Red for Score < 6

## 4. Interview Questions Generator

Have the AI Agent additionally generate 3-5 personalized interview questions based on:
- The listed skills
- Gaps in the resume
- The desired position

Save these questions in a separate column in Google Sheets.

## 5. Anonymized Evaluation

Remove name, email, and other personal data before the AI evaluation to avoid bias:
- Add a Code Node before the AI Agent
- Replace names with "Applicant #123"
- Store the mapping in a separate sheet
- Only after the evaluation are the real data merged back

## 6. Human Review Integration

Use n8n's "Wait for approval" Node for a manual review:
- After the AI evaluation the workflow pauses
- Integrate different review channels:
  - **Gmail**: Send an email with the application summary and Approve/Reject links
  - **Google Chat**: Post the evaluation in a review channel with interaction buttons
  - **Slack**: Alternative for teams using Slack

**Review Message Content:**
- Full application summary
- AI evaluation with score and reasoning
- Recommendation (INVITE/REJECT/WAITLIST)
- Buttons/links for the final decision

After the manual decision, the workflow continues and the final action (e.g., email to applicant) is executed.
