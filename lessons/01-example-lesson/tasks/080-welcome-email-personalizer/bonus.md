# Bonus Challenges

## 1. HTML Email mit Styling

Erweitere den Workflow um schön formatierte HTML-Emails:
- Füge ein zusätzliches Form-Feld "Lieblings-Farbe" hinzu
- Lass den AI Agent eine Email mit HTML-Struktur generieren
- Verwende die Lieblings-Farbe im Email-Design
- Im Email Node: Aktiviere HTML-Modus

## 2. Multi-Language Support

- Füge ein Dropdown-Feld "Sprache" im Form hinzu (Deutsch, Englisch, Spanisch)
- Erweitere den System Prompt: "Schreibe die Email in der Sprache: {{ $json.sprache }}"
- Teste mit verschiedenen Sprachen

## 3. Verschiedene Trigger kombinieren

Teste und kombiniere verschiedene Trigger-Quellen für deinen Workflow:
- Google Forms als Datenquelle
- Neuer Eintrag in einem Google Sheet
- Webhook als Trigger
- n8n Form Trigger

**Datenströme zusammenführen:**
- Nutze die "Edit Fields (Set)" Node um die verschiedenen Datenformate zu vereinheitlichen
- Mappe die Felder (Name, Email, etc.) auf ein einheitliches Schema
- So kann dein AI Agent mit allen Datenquellen arbeiten, unabhängig vom ursprünglichen Trigger

