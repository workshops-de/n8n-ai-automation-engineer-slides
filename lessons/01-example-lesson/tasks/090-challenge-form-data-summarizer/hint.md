# Hints

## ⚠️ Gmail Node Limitation

**Warning: Gmail-Tool will Error with other Mail-Hosts**

- ✅ `@gmail.com` addresses will work fine
- ❌ If you embedded your old email account into Gmail, you need to use **SMTP Node** instead
- ❌ Examples: `@hotmail.com`, `@gmx.de`, `@web.de`

The Gmail Node only works with native Gmail addresses. For other email providers, even if managed through Gmail, use the SMTP Node.

---

## Stuck? Here are some tips:

### Tool Schema Issues?

The tool schema in the AI Agent must follow the JSON Schema standard exactly. Make sure:
- `type: "object"` at the root
- Define all properties with `type`, `description`
- Specify required fields in the `required` array

### AI Agent Not Returning Structured Data?

Make sure that:
- The tool is correctly defined
- The System Prompt clearly states that the tool should be used
- The User Prompt passes all necessary data from the form

### Google Sheets Mapping Not Working?

Common errors:
- Node names don't match (case-sensitive!)
- Arrays must be joined with `.join()`
- Check the output structure of the AI Agent Node

### Testing with Realistic Data

Create at least 3 test applications:
1. **Perfect Application**: 10+ years experience, perfectly matching skills, excellent cover letter
2. **Weak Application**: Little experience, mismatched skills, generic cover letter
3. **Average Application**: Solid experience, partially matching skills, decent cover letter

This allows you to check whether the AI Agent evaluates fairly and consistently.

### Best Practice: Prompt Engineering

For better evaluations, tell the AI Agent:
- Which position is being evaluated
- Which skills are particularly important
- What criteria apply for INVITE/REJECT/WAITLIST

Example in System Prompt:
```
Important for this position: 5+ years experience, React, TypeScript, teamwork.
INVITE: Score 8+, all important skills present
WAITLIST: Score 6-7, some skills missing
REJECT: Score <6 or critical skills missing
```
