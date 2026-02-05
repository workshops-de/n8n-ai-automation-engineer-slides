# AI-gestützte Bewerbungsauswertung

## Goal

Erstelle ein Bewerbungsformular mit n8n Form, lasse die Bewerbungen automatisch durch einen AI Agent bewerten und speichere die Ergebnisse in Google Sheets.

## Was Du lernen wirst

- Bewerbungsformulare mit n8n Form erstellen
- AI Agent für automatische Bewerbungsbewertung einsetzen
- Strukturierte AI-Analysen mit Tools durchführen
- Field Mapping zwischen verschiedenen Nodes
- Daten in Google Sheets speichern

## Workflow Übersicht

**n8n Form Trigger** → **AI Agent** → **Google Sheets**

## Schritt-für-Schritt Anleitung

### 1. n8n Form Trigger erstellen

- Füge einen **n8n Form Trigger** Node hinzu
- Dieser erstellt automatisch ein professionelles Bewerbungsformular

### 2. Formularfelder konfigurieren

Füge im n8n Form Trigger folgende Felder hinzu:

- **Feld 1: Name**
  - Type: Text
  - Label: "Vollständiger Name"
  - Required: Yes

- **Feld 2: Email**
  - Type: Email
  - Label: "E-Mail-Adresse"
  - Required: Yes

- **Feld 3: Position**
  - Type: Text
  - Label: "Gewünschte Position"
  - Required: Yes
  - Placeholder: "z.B. Senior Developer, Marketing Manager..."

- **Feld 4: Berufserfahrung**
  - Type: Number
  - Label: "Jahre Berufserfahrung"
  - Required: Yes
  - Min: 0, Max: 50

- **Feld 5: Anschreiben**
  - Type: Textarea
  - Label: "Ihr Anschreiben / Motivation"
  - Required: Yes
  - Placeholder: "Warum möchten Sie bei uns arbeiten? Was sind Ihre Stärken?"

- **Feld 6: Qualifikationen**
  - Type: Textarea
  - Label: "Relevante Skills und Qualifikationen"
  - Required: Yes
  - Placeholder: "Beschreiben Sie Ihre wichtigsten Fähigkeiten, Technologien, Zertifikate..."

### 3. Formular anpassen (Optional)

- **Form Title**: "Online Bewerbung"
- **Form Description**: "Wir freuen uns auf Ihre Bewerbung! Füllen Sie das Formular aus und unser AI-System wird Ihre Bewerbung analysieren."
- **Submit Button Text**: "Bewerbung absenden"
- **Completion Message**: "Vielen Dank für Ihre Bewerbung! Wir melden uns in Kürze bei Ihnen."

### 4. Formular testen

- Klicke auf "Test Form" oder kopiere die Form URL
- Fülle das Formular mit Beispieldaten aus
- Sende ab und beobachte die Daten im Node Output

### 5. AI Agent Node einrichten

- Füge einen **AI Agent** Node hinzu
- Wähle ein AI Model 
- **System Prompt** (im Agent):
  ```
  Du bist ein erfahrener HR-Spezialist, der Bewerbungen professionell bewertet.
  
  Analysiere die Bewerbung sorgfältig und erstelle eine strukturierte Bewertung.
  Sei objektiv, fair und konstruktiv.
  ```

### 6. Google Sheet vorbereiten

Erstelle ein Google Sheet mit folgenden Spalten:
- Timestamp
- Name
- Email
- Position
- Berufserfahrung
- Gesamtbewertung
- Empfehlung
- Zusammenfassung
- Stärken
- Schwächen
- Erfahrung (1-10)
- Motivation (1-10)
- Skills (1-10)

### 7. Google Sheets Node konfigurieren

- Füge einen **Google Sheets** Node hinzu
- Operation: **Append Row**
- Wähle dein Google Sheet aus
- Mappe die Felder

### 8. Workflow testen

- Aktiviere den Workflow
- Fülle das Formular mehrmals mit unterschiedlichen Bewerbungsprofilen aus:
  - Eine starke Bewerbung
  - Eine schwache Bewerbung
  - Eine durchschnittliche Bewerbung
- Prüfe das Google Sheet auf vollständige Bewertungen
- Validiere, ob der AI Agent konsistent und fair bewertet

## Learning Objectives

- ✓ Komplexe Formulare mit n8n Form erstellen
- ✓ AI Agent mit Tools für strukturierte Outputs nutzen
- ✓ Tool Schemas mit JSON Schema definieren
- ✓ Automatisierte Bewertungssysteme aufbauen
- ✓ Multi-dimensionale Analysen durchführen
- ✓ Google Sheets als Datenbank verwenden

## Success Criteria

- [ ] Bewerbungsformular mit allen Feldern erstellt
- [ ] AI Agent mit save_evaluation Tool konfiguriert
- [ ] Bewertungen werden strukturiert ausgegeben
- [ ] Empfehlungen (EINLADEN/ABLEHNEN/WARTELISTE) werden korrekt gesetzt
- [ ] Alle Bewertungsdaten landen in Google Sheets
- [ ] Workflow funktioniert End-to-End
