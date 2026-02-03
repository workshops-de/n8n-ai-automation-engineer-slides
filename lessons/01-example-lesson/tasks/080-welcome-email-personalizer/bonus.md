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

## 3. Tageszeit-abhängige Begrüßung

- Füge einen Code Node vor dem AI Agent hinzu
- Ermittle die aktuelle Tageszeit (Morgen, Mittag, Abend, Nacht)
- Übergebe die Tageszeit an den AI Agent
- Der AI Agent soll passende Begrüßungen verwenden:
  - Morgen: "Guten Morgen"
  - Mittag: "Hallo"
  - Abend: "Guten Abend"
  - Nacht: "Hallo Nachteule"

## 4. Namen-Analyse

Erweitere den AI Agent um kreative Namen-Analysen:
- Der AI Agent soll die Bedeutung des Namens recherchieren (falls bekannt)
- Oder ein Akronym aus dem Namen erstellen
- Oder eine kreative Geschichte zum Namen erfinden
- Füge dies als persönliche Note in die Email ein

## 5. Welcome-Email Serie

Statt einer Email, erstelle eine Serie:
- **Email 1** (sofort): Willkommen
- **Email 2** (nach 1 Tag): Erste Schritte Guide
- **Email 3** (nach 3 Tagen): Tipps & Tricks

Verwende einen **Wait** Node zwischen den Emails und speichere den Status in einer Datenbank oder Google Sheet, um nicht mehrfach zu senden.
