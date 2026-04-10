# Hints

## Field Names in Expressions

The field names in the User Prompt must match exactly what the Form Trigger outputs. The easiest way to verify is to:

1. Execute the Form Trigger with a test submission
2. Click on the node output and inspect the JSON
3. Copy the exact field keys — they are usually the label text

Example: if your label is `"What is 10 + 10?"`, the key will be `$json['What is 10 + 10?']` (with quotes because of spaces and special characters).

---

## AI Agent Not Evaluating Correctly?

Make sure:
- The **System Prompt** explicitly lists all three correct answers
- The **User Prompt** passes all three answers from the form
- The model you chose supports instruction-following well (Claude or GPT-4 recommended)

---

## Google Sheets Mapping

The AI Agent output is typically in `$json.output` or `$json.text` depending on the model.

- Inspect the AI Agent node output after a test run
- Find the correct field name before wiring it to Google Sheets

---

## Score Not Showing in Google Sheets?

If you want a numeric score (0–3) in your sheet, instruct the AI Agent explicitly:
```
Include a numeric score (0, 1, 2, or 3) in your response as a separate field.
```

Or add a **Code Node** after the AI Agent to parse the score from the text output.

---

## Testing Tips

Try these combinations to verify your workflow behaves correctly:

| Q1 (10+10) | Q2 (100+100) | Q3 (22×22) | Expected Score |
|------------|--------------|------------|---------------|
| 20         | 200          | 484        | 3/3 ✅         |
| 20         | 200          | 400        | 2/3           |
| 5          | 5            | 5          | 0/3           |
