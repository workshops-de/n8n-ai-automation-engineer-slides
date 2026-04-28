# Hints

## Bot does not reply to messages?

- Make sure the bot is **Admin** in the group
- Check that the workflow in n8n is **active** (green toggle, top right)
- Test with `https://api.telegram.org/bot<TOKEN>/getUpdates` whether updates arrive
- Check that the Telegram Trigger webhook is registered: open the node → “Listen for Test-Event” → send a message

## Find the chat ID

Open in the browser:
```
https://api.telegram.org/bot<YOUR_TOKEN>/getUpdates
```
Search for `"chat":{"id":` — for groups the ID is negative (e.g. `-1001234567890`).

## Agent replies to every message (including its own)?

Add an **IF** node after the trigger and filter messages where `$json.message.from.is_bot` equals `true` — that avoids infinite loops.

## Using `$fromAI()` correctly

```
$fromAI('query', 'The search query to look up current information on the internet')
```

## Telegram Send Message — enable Markdown

To use formatting (bold, italic, links) in Telegram, set **Additional Fields** → **Parse Mode** to `Markdown` or `HTML`.
