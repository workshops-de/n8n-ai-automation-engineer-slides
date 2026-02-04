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
- Stelle den Chat Public und kopiere dir die Chat URL zum Testen

### 2. Google Sheet vorbereiten

Erstelle ein Google Sheet mit folgenden Spalten:
- **Timestamp** - Wann wurde der Nickname erstellt
- **Original Name** - Der eingegebene Name
- **Nickname** - Der generierte Spitzname
- **Chat Session** - Optional: Session-ID

### 3. AI Agent mit Tool einrichten

- Füge einen **AI Agent** Node hinzu
- Wähle ein AI Model (z.B. GPT-4 oder Claude)
- System Prompt definieren


### 4. Google Sheets Node konfigurieren

- Füge einen **Google Sheets** Tool hinzu
- Operation: **Append Row**
- Wähle dein vorbereitetes Google Sheet
- Mappe die Felder

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
