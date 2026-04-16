# Bonus Challenges

## Bonus 1: E-Mail Tool integrieren

Erweitere den Agenten um ein **Gmail** oder **SMTP**-Tool, sodass er auf Befehl E-Mails versenden kann:

- Beispiel: `"Schick mir eine Zusammenfassung per Mail"`
- Füge einen **Send Email** Node als Tool hinzu
- Nutze `$fromAI()` für Empfänger, Betreff und Inhalt

## Bonus 2: Nur auf Erwähnungen reagieren

Statt bei jeder Nachricht zu feuern, soll der Agent nur antworten, wenn er direkt erwähnt wird (z. B. `@dein_bot_name`):

- Füge nach dem Trigger eine **IF-Node** ein
- Bedingung: `{{ $json.message.text }}` enthält `@dein_bot_name`