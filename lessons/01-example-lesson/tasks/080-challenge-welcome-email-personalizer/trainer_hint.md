# Trainer Hints

## Key Points for Delivery

### Preparation

1. **Clarify Email Setup in advance**: Many participants have problems with SMTP credentials
   - Have Gmail App-Passwords guide ready
   - Alternative: Show Outlook, or n8n's own Email Service
2. **Test Email Addresses**: Recommend participants send to themselves
3. **AI Model Access**: Ensure all participants have access to an AI Model

### Common Pitfalls

#### 1. SMTP Authentication

Most problems arise here:
- **Gmail**: Requires App-Password, not regular password
- **Outlook/Office365**: Sometimes special Auth-Settings required
- **Company Email**: Often blocked/restricted

**Solution**: Show Gmail App-Password Setup live, or use a test SMTP service like Mailtrap or Ethereal Email

#### 2. AI Agent Output Structure

Depending on the chosen model, the output varies:
- GPT Models: Often `output` or `text`
- Claude: Usually `text` or `content`
- **Important**: Participants must inspect the output!

**Tip**: Show live how to inspect the Node Output and find the correct property

#### 3. Form → AI → Email Mapping

Participants often confuse:
- Which Node has which data
- Correct referencing: `$('NodeName').item.json.field`
- Case-sensitivity in Node names

### Time Management

- **5 Min**: Form Setup
- **10 Min**: Configure and test AI Agent
- **10 Min**: Email Node Setup and Troubleshooting

### Demo Tips

Show live:
1. How to create an n8n Form (very quick!)
2. How to inspect the AI Agent output
3. How to map fields correctly
4. A test email from start to finish

### Advanced Discussion Points

After the exercise:

1. **Email Deliverability**
   - SPF, DKIM, DMARC Records
   - Why do emails end up in spam?
   - Production-Ready Email Services (SendGrid, AWS SES)

2. **Personalization**
   - How far should personalization go?
   - Risks of AI-generated emails (hallucinations, tone)
   - A/B Testing for email variants

3. **Scaling**
   - What about 10,000 sign-ups per day?
   - Rate limits of AI APIs
   - Queue systems for email delivery

4. **Data Privacy**
   - Email addresses are personal data
   - Opt-in/Opt-out mechanisms
   - GDPR-compliant email storage

### Bonus Challenges (if time allows)

1. **Multi-Language Support**: Form field for language, AI generates in selected language
2. **Emoji Personalization**: AI adds fitting emojis based on name/mood
3. **HTML Email**: Use HTML instead of Plain Text for styled emails
4. **Welcome Series**: Not just one email, but a series with delays

### Troubleshooting Checklist

- [ ] Are SMTP credentials correct?
- [ ] Is the AI Agent connected to a model?
- [ ] Was the AI Agent executed as a test?
- [ ] Is the output of the AI Agent correctly mapped?
- [ ] Are all node references written correctly?
- [ ] Is the workflow activated?
- [ ] Was the form filled out and submitted?

### Alternative: Email-less Testing

If email setup is too problematic:
- Show the generated email text only in the workflow output
- Or write it to a Google Sheets column
- Focus on AI personalization instead of email technology
