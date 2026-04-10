# Bonus Challenges

## 1. HTML Email with Styling

Extend the workflow with nicely formatted HTML emails:
- Add an additional form field "Favorite Color"
- Have the AI Agent generate an email with HTML structure
- Use the favorite color in the email design
- In the Email Node: Enable HTML mode

## 2. Multi-Language Support

- Add a dropdown field "Language" in the form (German, English, Spanish)
- Extend the System Prompt: "Write the email in the language: {{ $json.language }}"
- Test with different languages

## 3. Combine Different Triggers

Test and combine different trigger sources for your workflow:
- Google Forms as data source
- New entry in a Google Sheet
- Webhook as trigger
- n8n Form Trigger

**Merging Data Streams:**
- Use the "Edit Fields (Set)" Node to standardize the different data formats
- Map the fields (Name, Email, etc.) to a unified schema
- This way your AI Agent can work with all data sources, regardless of the original trigger
