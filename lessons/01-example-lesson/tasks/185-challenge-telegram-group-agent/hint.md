# Hints

## Bot antwortet nicht auf Nachrichten?

- Stelle sicher, dass der Bot **Admin** in der Gruppe ist
- Prüfe, ob der Workflow in n8n **aktiv** ist (grüner Toggle oben rechts)
- Teste mit `https://api.telegram.org/bot<TOKEN>/getUpdates` ob Nachrichten ankommen
- Prüfe ob der Telegram Trigger Webhook korrekt registriert ist: Node öffnen → „Listen for Test-Event" → Nachricht senden

## Chat-ID herausfinden

Rufe im Browser auf:
```
https://api.telegram.org/bot<DEIN_TOKEN>/getUpdates
```
Suche nach `"chat":{"id":` – für Gruppen ist die ID negativ (z. B. `-1001234567890`).

## Agent antwortet auf alle Nachrichten (auch eigene)?

Füge eine **IF-Node** nach dem Trigger ein und filtere Nachrichten, bei denen `$json.message.from.is_bot` gleich `true` ist – so vermeidest du Endlosschleifen.

## $fromAI() richtig verwenden

```
$fromAI('query', 'The search query to look up current information on the internet')
```

## Telegram Send Message – Markdown aktivieren

Um Formatierungen (fett, kursiv, Links) in Telegram zu nutzen, setze unter **Additional Fields** → **Parse Mode** auf `Markdown` oder `HTML`.
