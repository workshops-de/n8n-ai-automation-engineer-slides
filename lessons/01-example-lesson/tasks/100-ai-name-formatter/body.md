# AI Name Formatter - Creative Nicknames

## Goal

Erstelle einen interaktiven Chat-Bot, der Namen entgegennimmt, kreative Nicknames generiert und diese automatisch in Google Sheets speichert.

## Was Du lernen wirst

- Chat Trigger für interaktive Workflows
- AI Agent für kreative Textgenerierung
- Tools im AI Agent definieren
- Direkte Integration mit Google Sheets
- Strukturierte Datenausgabe

## Workflow Übersicht

**Chat Trigger** → **AI Agent** → **Google Sheets**

## Schritt-für-Schritt Anleitung

### 1. Chat Trigger einrichten

- Füge einen **Chat Trigger** Node hinzu
- Konfiguriere den Chat:
  - **Initial Message**: "Hallo! Ich bin dein Nickname-Generator. Gib mir einen Namen und ich erstelle einen kreativen Spitznamen dafür! 😄"
  - **Waiting Message**: "Lass mich nachdenken..."
- Notiere dir die Chat URL zum Testen

### 2. Google Sheet vorbereiten

Erstelle ein Google Sheet mit folgenden Spalten:
- **Timestamp** - Wann wurde der Nickname erstellt
- **Original Name** - Der eingegebene Name
- **Nickname** - Der generierte Spitzname
- **Chat Session** - Optional: Session-ID

### 3. AI Agent mit Tool einrichten

- Füge einen **AI Agent** Node hinzu
- Wähle ein AI Model (z.B. GPT-4 oder Claude)

#### System Prompt:

```
Du bist ein kreativer Nickname-Generator mit viel Humor und Fantasie.

Wenn ein Nutzer dir einen Namen gibt, erstelle einen lustigen, einzigartigen Spitznamen.

Regeln für Nicknames:
1. Sei kreativ und überraschend
2. Der Nickname sollte positiv und freundlich sein
3. Du kannst Wortspiele mit dem Namen machen oder komplett neue Ideen haben
4. Halte es angemessen und respektvoll
5. Füge eine kurze (1 Satz) Erklärung hinzu, warum dieser Nickname passt

Nachdem du einen Nickname erstellt hast, verwende IMMER das save_nickname Tool, um ihn zu speichern.

Beispiele:
- "Anna Schmidt" → "Die Schmidtinatorin" (Weil sie alles im Griff hat!)
- "Max Müller" → "Mühlen-Max" (Immer in Bewegung wie eine Mühle!)
- "Lisa Weber" → "Web-Lisa" (Vernetzt die ganze Welt!)
```

### 4. Tool für den AI Agent erstellen

Der AI Agent soll ein Tool haben, um Nicknames zu speichern:

- **Tool Name**: `save_nickname`
- **Tool Description**: 
  ```
  Speichert den generierten Nickname mit folgenden Parametern:
  - original_name: Der ursprüngliche Name des Nutzers
  - nickname: Der generierte kreative Spitzname
  - explanation: Kurze Erklärung (1 Satz), warum dieser Nickname passt
  ```

- **Tool Parameters** (JSON Schema):
  ```json
  {
    "type": "object",
    "properties": {
      "original_name": {
        "type": "string",
        "description": "Der ursprüngliche Name"
      },
      "nickname": {
        "type": "string",
        "description": "Der generierte Spitzname"
      },
      "explanation": {
        "type": "string",
        "description": "Kurze Erklärung warum dieser Nickname passt"
      }
    },
    "required": ["original_name", "nickname", "explanation"]
  }
  ```

### 5. Google Sheets Node konfigurieren

- Füge einen **Google Sheets** Node hinzu
- Operation: **Append Row**
- Wähle dein vorbereitetes Google Sheet
- Mappe die Felder:
  ```
  Timestamp: {{ new Date().toISOString() }}
  Original Name: {{ $('AI Agent').item.json.original_name }}
  Nickname: {{ $('AI Agent').item.json.nickname }}
  Explanation: {{ $('AI Agent').item.json.explanation }}
  Chat Session: {{ $('Chat Trigger').item.json.sessionId }}
  ```

### 6. Chat Response konfigurieren (Optional)

- Der AI Agent antwortet automatisch im Chat
- Du kannst seine Antwort verwenden oder eine eigene formatieren
- Beispiel für eigene Antwort:
  ```
  🎉 Dein Nickname: {{ $('AI Agent').item.json.nickname }}
  
  {{ $('AI Agent').item.json.explanation }}
  
  Gespeichert! Möchtest du noch einen Namen ausprobieren?
  ```

### 7. Workflow testen

- Aktiviere den Workflow
- Öffne die Chat URL
- Teste mit verschiedenen Namen:
  - "Anna Schmidt"
  - "Max Mustermann"
  - "Lisa Müller"
  - "Tom Weber"
  - "Sarah Klein"
- Prüfe das Google Sheet - alle Nicknames sollten dort erscheinen
- Validiere, dass jeder Nickname einzigartig und kreativ ist

## Learning Objectives

- ✓ Chat Trigger für interaktive Workflows nutzen
- ✓ AI Agent mit Tools einsetzen
- ✓ Tool Schemas mit JSON Schema definieren
- ✓ Kreative AI-Anwendungen bauen
- ✓ Direkte Datenbank-Integration mit Google Sheets
- ✓ Strukturierte Ausgaben erzwingen

## Success Criteria

- [ ] Chat Trigger ist aktiv und erreichbar
- [ ] AI Agent generiert kreative Nicknames
- [ ] Jeder Nickname ist einzigartig
- [ ] Tool save_nickname funktioniert korrekt
- [ ] Daten werden in Google Sheets gespeichert
- [ ] Chat antwortet freundlich und interaktiv
- [ ] Mehrere Namen können nacheinander eingegeben werden
