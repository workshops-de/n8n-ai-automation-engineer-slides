# Bonus challenges

## Bonus 1: Integrate an email tool

Extend the agent with a **Gmail** or **SMTP** tool so it can send emails on command:

- Example: `"Send me a summary by email"`
- Add a **Send Email** node as a tool
- Use `$fromAI()` for recipient, subject, and body

## Bonus 2: Reply only when mentioned

Instead of firing on every message, make the agent reply only when it is mentioned directly (e.g. `@your_bot_name`):

- Add an **IF** node after the trigger
- Condition: `{{ $json.message.text }}` contains `@your_bot_name`
