# Bonus Challenges

## 1. Themen-basierte Nicknames

Erweitere den Chat um Themen-Auswahl:
- Füge im System Prompt hinzu: "Der Nutzer kann ein Thema angeben (z.B. 'Space', 'Superhelden', 'Mittelalter')"
- Der AI Agent soll nach dem Thema fragen, wenn keins angegeben wurde
- Speichere das Thema als zusätzliches Feld im Google Sheet

**Beispiel Chat:**
```
Nutzer: "Max Mustermann, Thema: Space"
Bot: "🚀 Dein Space-Nickname: Captain Maximus der Sternenwanderer!"
```

## 2. Multiple Varianten zur Auswahl

Lass den AI Agent 3 verschiedene Nickname-Optionen generieren:
- Erweitere das Tool-Schema um ein Array `nickname_options: [string, string, string]`
- Der AI Agent präsentiert alle 3 Optionen
- Der Nutzer wählt eine aus (z.B. "Option 1")
- Nur die gewählte wird gespeichert

**Beispiel:**
```
🎲 3 Nickname-Optionen für "Anna Schmidt":
1. Die Schmidtinatorin
2. Anna-Banana
3. Blitzschmidt

Welche gefällt dir am besten? (1, 2 oder 3)
```

## 3. Persönlichkeits-Integration

Füge ein Persönlichkeits-Feld hinzu:
- Der Nutzer kann optional eine Persönlichkeit angeben: "lustig", "ernst", "kreativ", "sportlich"
- Der AI Agent passt den Nickname-Stil an die Persönlichkeit an
- Speichere die Persönlichkeit im Google Sheet

**Beispiel:**
```
Nutzer: "Lisa Weber, lustig"
Bot: "😂 Dein lustiger Nickname: Weber-Grill-Lisa (Immer heiß auf Party!)"
```

## 4. Rating System

Implementiere ein Bewertungssystem:
- Nach jedem Nickname fragt der Bot: "Gefällt dir der Nickname? 👍 oder 👎"
- Der Nutzer antwortet mit Emoji oder "ja"/"nein"
- Speichere das Rating im Google Sheet
- Bonus: Bei 👎 generiert der AI Agent einen neuen Nickname

## 5. Statistik Dashboard

Erstelle ein zweites Google Sheet Tab "Statistik":
- Anzahl generierte Nicknames pro Tag
- Durchschnittliche Ratings
- Beliebteste Themen
- Häufigste Namen

Verwende eine **Google Sheets Formula** oder einen zusätzlichen **Schedule Trigger**, der täglich die Stats aktualisiert.

## 6. Multi-Language Support

Erweitere den Bot um Mehrsprachigkeit:
- Der Nutzer kann die Sprache wählen: "Deutsch", "English", "Español"
- Der AI Agent antwortet in der gewählten Sprache
- Nicknames werden sprachspezifisch generiert

**Beispiel:**
```
Nutzer: "English: John Smith"
Bot: "🎉 Your Nickname: The Smithsonian (Like the museum, unforgettable!)"
```

## 7. Nickname History

Zeige die letzten 5 Nicknames im Chat:
- Füge einen **Google Sheets Read** Node vor dem AI Agent ein
- Lese die letzten 5 Einträge
- Der AI Agent kann sehen, welche Nicknames bereits generiert wurden
- Verhindert Duplikate und kann Trends erkennen

**Beispiel:**
```
Bot: "Ich habe heute schon 5 Space-themed Nicknames erstellt - du liebst das Weltall! 🚀"
```
