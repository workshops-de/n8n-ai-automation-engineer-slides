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

## Bonus 3: Befehlsstruktur mit `/commands`

Implementiere Telegram-Befehle:

- `/research <Thema>` → Perplexity-Recherche starten
- `/help` → Verfügbare Befehle anzeigen
- `/summary` → Letzte 5 Nachrichten zusammenfassen (Memory nutzen)

## Bonus 4: Kalender-Integration

Verbinde einen **Google Calendar** Node als Tool, damit der Agent:

- Termine abfragen kann: `"Was steht morgen im Kalender?"`
- Neue Termine erstellen kann: `"Erstelle einen Termin für Freitag 14 Uhr"`

## Bonus 5: Mehrsprachigkeit

Erweitere den System Prompt so, dass der Agent automatisch in der Sprache des Nutzers antwortet und die Sprache aus dem Nachrichtentext ableitet.
