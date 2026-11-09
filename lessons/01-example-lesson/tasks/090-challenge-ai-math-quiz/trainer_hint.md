# Trainer Hints

## Key Points for Delivery

### Why This Challenge

This task teaches the core pattern of **form → AI evaluation → data storage** in a simple, neutral context. Math questions are universal, immediately verifiable, and avoid any sensitive data concerns.

### Preparation

1. **Google Sheet Template**: Prepare an example sheet participants can copy (columns: Timestamp, Name, Q1, Q2, Q3, Score, Feedback)
2. **AI Model Access**: Ensure all participants have access to a model (Claude or GPT-4 recommended for instruction-following)
3. **Demo Answers**: Have a few test submissions ready (all correct, mixed, all wrong)

### Common Pitfalls

#### 1. Field Name Referencing in Expressions

The most frequent issue: field keys contain spaces and special characters.

- Label `"What is 10 + 10?"` → key is `$json['What is 10 + 10?']`
- Participants often try `$json.whatIs10plus10` or forget the brackets

**Tip**: Always inspect the Form Trigger output first — show this live.

#### 2. AI Agent Output Varies by Model

- GPT models: output in `$json.output` or `$json.text`
- Claude: usually `$json.text` or `$json.content`

**Tip**: Show how to click through the node output to find the right field before wiring to Google Sheets.

#### 3. Score Extraction

Participants may want a numeric score in Google Sheets. The AI returns it as prose.

Options:
- Ask the AI to include a separate line `Score: 2/3` and parse with a Code Node
- Or keep it simple and just save the feedback text for the workshop

### Time Management

- **5 Min**: Form setup and test submission
- **10 Min**: AI Agent system prompt and user prompt
- **10 Min**: Google Sheets integration and field mapping
- **5 Min**: Testing with different answer combinations

### Demo Tips

Show live:
1. Create the form in 2 minutes — emphasize how fast n8n Form is
2. Inspect the Form Trigger output to show exact field names
3. Enter a deliberately wrong answer and show the AI feedback adapts
4. Show the Google Sheet being updated in real time

### Discussion Points

After the exercise:

1. **Prompt Engineering for Evaluation**
   - How does changing the System Prompt tone affect the feedback?
   - What happens with edge cases (e.g., "twenty" instead of "20")?
   - How would you handle non-numeric input?

2. **Scaling**
   - What if 100 students submit at the same time?
   - Rate limits of AI APIs
   - Cost per evaluation

3. **Generalization**
   - This same pattern works for any form + AI evaluation use case
   - Knowledge checks, customer surveys, onboarding quizzes, etc.

### Troubleshooting Checklist

- [ ] Is the n8n Form Trigger configured with all 4 fields?
- [ ] Was a test submission made to verify field names?
- [ ] Are expressions in the User Prompt using the correct keys?
- [ ] Is the AI Agent connected to a model?
- [ ] Was the AI Agent executed as a standalone test?
- [ ] Are Google Sheets credentials configured?
- [ ] Are all column names in the sheet spelled correctly?
- [ ] Is the workflow activated before testing end-to-end?
