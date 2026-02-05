# AI Welcome Email Personalizer

## Goal

Erstelle ein einfaches Anmeldeformular mit n8n Form, das einen Namen entgegennimmt und automatisch eine personalisierte Willkommens-Email mit Hilfe eines AI Agents generiert und versendet.

## Was Du lernen wirst

- n8n Form für Datenerfassung verwenden
- AI Agent für personalisierte Texte einsetzen
- AI Output an Email Nodes weitergeben
- Dynamische Personalisierung implementieren

## Workflow Übersicht

**n8n Form Trigger** → **AI Agent** → **Email**

## Schritt-für-Schritt Anleitung

### 1. n8n Form Trigger erstellen

- Füge einen **n8n Form Trigger** Node hinzu
- Dies erstellt automatisch ein schönes, nutzbares Formular

### 2. Formularfelder konfigurieren

Füge im n8n Form Trigger folgende Felder hinzu:

- **Feld 1: Name**
  - Type: Text
  - Label: "Dein Name"
  - Required: Yes
  - Placeholder: "Max Mustermann"

- **Feld 2: Email**
  - Type: Email
  - Label: "Deine E-Mail-Adresse"
  - Required: Yes
  - Placeholder: "max@beispiel.de"

### 3. Formular anpassen

- **Form Title**: "Willkommen! Melde dich an"
- **Form Description**: "Trage deinen Namen ein und erhalte eine personalisierte Willkommens-Email"
- **Submit Button Text**: "Anmelden"
- **Completion Message**: "Danke! Du erhältst gleich eine Email von uns."

### 4. Formular testen

- Klicke auf "Test Form" oder kopiere die Form URL
- Fülle das Formular mit einem Testnamen aus
- Sende ab und beobachte die Daten im Node Output

### 5. AI Agent für Email-Generierung

- Füge einen **AI Agent** Node hinzu
- Wähle ein AI Model (z.B. GPT-4 oder Claude)
- **System Prompt**:
  ```
  Du bist ein freundlicher Onboarding-Assistent, der personalisierte Willkommens-Emails schreibt.
  
  Erstelle eine warme, einladende Willkommens-Email die:
  1. Den Nutzer persönlich beim Namen begrüßt
  2. Ihn auf der Plattform willkommen heißt
  3. Einen motivierenden, freundlichen Ton hat
  4. Eine kreative, überraschende Botschaft enthält (z.B. ein inspirierendes Zitat, einen Witz, oder einen Fun Fact)
  5. Kurz und prägnant ist (max. 150 Wörter)
  
  Gib nur den Email-Text aus, keine Betreffzeile.
  ```

- **User Prompt**:
  ```
  Neuer Nutzer hat sich angemeldet:
  Name: {{ $json.name }}
  
  Erstelle eine personalisierte Willkommens-Email.
  ```

### 6. Email Node konfigurieren

- Füge einen **Gmail: Send Email** Node hinzu und konfiguriere diese

### 7. Workflow testen

- Aktiviere den Workflow
- Fülle das Formular mehrmals mit verschiedenen Namen aus
- Prüfe die generierten Emails
- Validiere, dass jede Email personalisiert und einzigartig ist

## Learning Objectives

- ✓ n8n Forms für Datenerfassung nutzen
- ✓ AI Agent für personalisierte Content-Generierung einsetzen
- ✓ Dynamische Daten zwischen Nodes weitergeben
- ✓ Email-Automationen implementieren
- ✓ AI Output richtig mappen und verwenden

## Success Criteria

- [ ] n8n Form ist erstellt und funktioniert
- [ ] Form nimmt Name und Email entgegen
- [ ] AI Agent generiert personalisierte Willkommens-Emails
- [ ] Jede Email ist einzigartig und enthält den Namen
- [ ] Email wird erfolgreich versendet
- [ ] Workflow läuft End-to-End automatisch
