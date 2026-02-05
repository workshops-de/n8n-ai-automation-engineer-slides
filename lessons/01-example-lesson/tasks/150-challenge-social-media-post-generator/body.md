# AI Social Media Post Generator

## Goal

Erstelle einen vollautomatischen Content-Generator Workflow, der über Google Forms getriggert wird. Nutzer können Topics über ein Formular einreichen, der AI Agent generiert einen Social Media Post und speichert diesen als Google Doc ab.

## Was Du lernen wirst

- Google Forms als Input-Quelle
- Google Sheets Trigger (on new row)
- AI Agent mit Google Docs Tool
- Content-Generierung mit plattformspezifischen Regeln
- Event-driven AI-Workflows
- Google Drive Integration

## Workflow Übersicht

**Google Form** → **Google Sheets** → **Google Sheets Trigger** → **AI Agent** → **Google Doc**

## Schritt-für-Schritt Anleitung

### 1. Google Form erstellen

Erstelle ein Google Form mit folgenden Feldern:

**Feld 1: Topic**
- Typ: Kurze Antwort
- Pflichtfeld: Ja
- Beschreibung: "Über welches Thema soll ein Social Media Post erstellt werden?"
- Beispiel: "AI in Healthcare", "Remote Work Tips"

**Feld 2: Platform**
- Typ: Multiple Choice
- Optionen: Twitter, LinkedIn, Both
- Pflichtfeld: Ja

**Form Einstellungen:**
- Verknüpfe das Form mit einem neuen Google Sheet
- Google Forms erstellt automatisch ein Sheet mit den Antworten
- Das Sheet bekommt automatisch Spalten: Timestamp, Topic, Platform

### 2. Google Sheet erweitern

Öffne das verknüpfte Google Sheet und füge zusätzliche Spalten hinzu:
- **Status** (für Tracking: Generated, Posted, etc.)
- **Document URL** (Link zum Google Doc)
- **Generated Date** (wann wurde generiert)

Dein Sheet hat jetzt:
- Timestamp (automatisch von Google Forms)
- Topic (von Form)
- Platform (von Form)
- Status (manuell hinzugefügt)
- Document URL (manuell hinzugefügt)
- Generated Date (manuell hinzugefügt)

### 3. Google Sheets Trigger einrichten

- Füge einen **Google Sheets Trigger** hinzu
- Trigger: **On Row Added**
- Wähle dein Google Sheet aus
- Sheet: Das Sheet mit den Form-Antworten (meist "Formularantworten 1")
- Dieser Trigger feuert automatisch, wenn jemand das Form ausfüllt!

### 4. AI Agent mit Tools konfigurieren

- Füge einen **AI Agent** Node hinzu
- Wähle ein leistungsfähiges Model (GPT-4, Claude, etc.)

**System Prompt erstellen:**

Der System Prompt ist der wichtigste Teil dieser Challenge! Er muss dem AI Agent klar erklären:
- Was seine Aufgabe ist
- Welche Tools er verwenden soll
- Welche Regeln für die verschiedenen Plattformen gelten
- Wie er die Daten aus Google Sheets verarbeiten soll

💡 **Tipp:** Nutze ChatGPT oder Claude um den perfekten System Prompt zu erstellen!

Frage z.B.:
> "Ich baue einen n8n Workflow mit einem AI Agent, der Social Media Posts erstellt. Der Agent hat Tools für: Google Sheets (Read), Twitter, LinkedIn, und Google Sheets (Update). Erstelle mir einen System Prompt, der dem Agent erklärt wie er autonom Posts aus dem Sheet liest, generiert, veröffentlicht und das Sheet aktualisiert. Twitter max 280 Zeichen, LinkedIn max 300 Zeichen."

Experimentiere mit verschiedenen Prompt-Varianten und teste, welche am besten funktioniert!

**User Prompt:**
```
Ein neues Topic wurde über das Google Form eingereicht:

Topic: {{ HIER MUSST DU SELBER WAS EINTRAGEN 😉 }}
Platform: {{ HIER MUSST DU SELBER WAS EINTRAGEN 😉 }}

Erstelle einen passenden Social Media Post, speichere ihn als Google Doc und update das Google Sheet mit dem Doc-Link.
```

### 5. Google Drive Ordner vorbereiten

- Erstelle einen Ordner in Google Drive für die generierten Posts
- Beispiel: "AI Social Media Posts"
- Notiere dir die Folder ID aus der URL (Optional, für bessere Organisation)

### 6. Tools zum AI Agent hinzufügen

Füge folgende Tools zum AI Agent hinzu:

**Tool 1: Google Docs (Create)**
- Node: Google Docs
- Operation: Create Document
- Zweck: Post als Google Doc speichern
- Tool Description: "Create a new Google Doc with the generated social media post. Title format: '[Platform] - [Topic] - [Date]'. Include the full post text in the document."

**Tool 2: Google Sheets (Update)**
- Node: Google Sheets
- Operation: Update Row
- Zweck: Zeile mit Status und Doc-Link aktualisieren
- Tool Description: "Update the Google Sheet row that triggered the workflow. Set Status='Generated', add Document URL and Generated Date."

### 7. Workflow aktivieren und testen

- Aktiviere den Workflow
- Öffne dein Google Form
- Fülle das Formular aus mit einem Test-Topic:
  - Topic: "AI in Healthcare"
  - Platform: Twitter
- Sende das Form ab
- Der Workflow startet automatisch!
- Beobachte wie der AI Agent:
  1. Die neue Zeile aus dem Trigger erhält
  2. Einen Post für das Topic generiert (plattformspezifisch)
  3. Ein Google Doc mit dem Post erstellt
  4. Die Zeile im Sheet aktualisiert (Status, Doc URL, Date)
- Öffne das Google Doc und prüfe den generierten Post!

## Learning Objectives

- ✓ Google Forms als Input-Quelle nutzen
- ✓ Google Sheets Trigger (On Row Added) einrichten
- ✓ Event-driven Workflows erstellen
- ✓ AI Agent mit Google Docs Tool
- ✓ Google Docs programmatisch erstellen
- ✓ Google Sheets Update als Tool nutzen
- ✓ Platform-spezifische Content-Regeln in AI Prompts

## Success Criteria

- [ ] Google Form ist erstellt und mit Google Sheet verknüpft
- [ ] Google Sheets Trigger (On Row Added) ist konfiguriert
- [ ] Form-Submission triggert automatisch den Workflow
- [ ] AI Agent erhält Topic und Platform aus der neuen Zeile
- [ ] AI Agent generiert plattformspezifische Posts
- [ ] AI Agent erstellt Google Doc mit dem Post
- [ ] Google Doc hat sinnvollen Titel und korrekten Inhalt
- [ ] AI Agent aktualisiert Sheet mit Doc URL und Status
- [ ] Gesamter Workflow läuft event-driven und autonom
