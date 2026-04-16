# Telegram Group AI Agent

## Goal

Baue einen AI Agenten, der in einer Telegram-Gruppe aktiv ist, auf Nachrichten reagiert, eigenständig Antworten über den **Telegram Send Message**-Node schreibt und bei Bedarf mit **Perplexity** Recherchen im Internet durchführt.

## Workflow Overview

**Telegram Trigger** → **AI Agent** → **Telegram Send Message** (+ Perplexity Tool)

---

## Part 1: Bot in Telegram-Gruppe hinzufügen

### 1. Gruppe erstellen oder öffnen

- Erstelle eine neue Telegram-Gruppe oder öffne eine bestehende
- Füge deinen Bot als Mitglied hinzu (über „Mitglieder hinzufügen" → Botname suchen)

### 2. Bot zum Admin machen

> ⚠️ **Wichtig:** Der Bot muss Admin-Rechte besitzen, damit er Nachrichten in der Gruppe lesen und senden kann.

- Öffne die Gruppeneinstellungen → **Administratoren** → **Admin hinzufügen**

### 3. Chat-ID der Gruppe ermitteln

- Öffne die Gruppe im Browser via https://web.telegram.org und kopiere die Chat ID

https://web.telegram.org/a/#-1001234567890

- Kopiere die `ChatID` beginnt mit `-` für Gruppen, z. B. `-1001234567890`

---

## Part 2: n8n Workflow aufbauen

### 4. Telegram Trigger Node

- Füge einen **Telegram Trigger** Node hinzu
- Wähle deine Telegram-Credential
- Event: **Message**
- Speichere den Node – n8n registriert damit automatisch den Webhook beim Bot

> 💡 Der Trigger feuert bei **jeder** Nachricht in der Gruppe. Der Agent entscheidet selbst, ob und wie er antwortet.

### 5. AI Agent Node

- Füge einen **AI Agent** Node hinzu 
- Verbinde: **Telegram Trigger** → **AI Agent**
- Füge einen **Simple Memory** Node an den Agenten an

**System Prompt Beispiel:**
```
Du bist ein hilfreicher AI-Assistent in einer Telegram-Gruppe.

Wenn du eine Nachricht erhältst, entscheide ob und wie du antwortest:
- Bei direkten Fragen: antworte präzise und hilfreich
- Bei Recherchebedarf: nutze das Perplexity-Tool für aktuelle Informationen
- Halte deine Antworten kurz und klar (Telegram-freundlich)
- Antworte immer auf Deutsch, außer der Nutzer schreibt in einer anderen Sprache

Die Nachricht kommt von: {{ $json.message.from.first_name }}
Nachrichtentext: {{ $json.message.text }}
```

**Input-Mapping:**
- Setze das `Text`-Feld des Agenten auf:
  ```
  {{ $json.message.text }}
  ```

### 6. Perplexity Tool hinzufügen

- Füge einen **Perplexity Tool** Node hinzu
- Verbinde ihn als Tool mit dem AI Agent
- Setze das `Text`-Feld auf AI Magic ✨ oder `$fromAI('query', 'The search query for internet research')`

### 7. Telegram Send Message Node

- Füge einen **Telegram** Tool Node hinzu

### 8. Workflow testen

- Aktiviere den Workflow
- Schreibe eine Nachricht in die Telegram-Gruppe, z. B.:
  - `Was sind die neuesten n8n Features?`
  - `Erkläre mir kurz, was RAG ist`
  - `Wie ist das Wetter aktuell in Berlin?`
- Der Bot sollte innerhalb weniger Sekunden antworten