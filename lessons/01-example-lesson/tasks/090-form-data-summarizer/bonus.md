# Bonus Challenges

## 1. Automatische Absage/Einladungs-Email

Erweitere den Workflow um einen Email-Node, der automatisch:
- Bei **EINLADEN**: Eine Einladung zum Vorstellungsgespräch sendet
- Bei **ABLEHNEN**: Eine höfliche Absage mit konstruktivem Feedback sendet
- Bei **WARTELISTE**: Eine Info-Mail sendet, dass die Bewerbung gespeichert wurde

Verwende personalisierte Emails mit den Daten aus der AI-Bewertung.

## 2. Multi-Stufen Bewertung

Implementiere ein zweistufiges Bewertungssystem:
- **Stufe 1**: Schnelle automatische Vorauswahl (aktueller AI Agent)
- **Stufe 2**: Nur Top-Bewerbungen (Score ≥ 8) werden an einen zweiten, detaillierteren AI Agent weitergeleitet

Der zweite Agent könnte:
- Tiefergehende Fragen zur Motivation stellen
- Spezifische Technical Skills bewerten
- Cultural Fit analysieren

## 3. Ranking und Dashboard

- Erstelle ein zweites Google Sheet Tab "Rankings"
- Sortiere alle Bewerber automatisch nach Score
- Füge Conditional Formatting hinzu:
  - Grün für Score ≥ 8
  - Gelb für Score 6-7
  - Rot für Score < 6

## 4. Interview-Fragen Generator

Lass den AI Agent zusätzlich 3-5 personalisierte Interview-Fragen generieren basierend auf:
- Den angegebenen Skills
- Lücken im Lebenslauf
- Der gewünschten Position

Speichere diese Fragen in einer separaten Spalte im Google Sheet.

## 5. Anonymisierte Bewertung

Entferne Name, Email und andere persönliche Daten vor der AI-Bewertung um Bias zu vermeiden:
- Füge einen Code-Node vor dem AI Agent hinzu
- Ersetze Namen durch "Bewerber #123"
- Speichere die Zuordnung in einem separaten Sheet
- Erst nach der Bewertung werden die echten Daten wieder zusammengeführt
