# Trainer Hints

## Wichtige Punkte für die Durchführung

### Vorbereitung

1. **Google Sheet Template erstellen**: Bereite ein Beispiel-Sheet vor, damit Teilnehmer es kopieren können
2. **API Keys prüfen**: Stelle sicher, dass alle Teilnehmer Zugriff auf ein AI Model haben (OpenAI, Anthropic, etc.)
3. **Demo-Bewerbungen**: Halte 2-3 realistische Beispiel-Bewerbungen bereit

### Häufige Stolpersteine

#### 1. Tool Schema Syntax
Teilnehmer vergessen oft:
- Das `type: "object"` im Root-Level
- Die `required` Felder zu definieren
- Korrekte JSON Schema Syntax (besonders bei Arrays)

**Tipp**: Zeige das Tool Schema im JSON Format und erkläre kurz JSON Schema Basics.

#### 2. AI Agent Tool Output
Der Output des AI Agent muss richtig gemappt werden:
- Wenn das Tool aufgerufen wurde, sind die Daten in `$json.tool_output` oder direkt in `$json`
- Prüfe die tatsächliche Struktur im Node Output!

#### 3. Field Mapping in Google Sheets
- Array-Felder (strengths, weaknesses) müssen mit `.join()` oder `.join(', ')` zusammengefügt werden
- Achte auf die korrekte Node-Referenzierung: `$('n8n Form Trigger').item.json.field`

### Zeitmanagement

- **15 Min**: Form + AI Agent Setup
- **10 Min**: Google Sheets Integration
- **5 Min**: Testing und Debugging

### Erweiterte Diskussionspunkte

Nach der Übung kannst Du diskutieren:

1. **Bias in AI-Bewertungen**
   - Wie vermeiden wir unfaire Bewertungen?
   - Sollte AI allein entscheiden oder nur unterstützen?
   - Was ist mit Namen, Geschlecht, Alter?

2. **Datenschutz (DSGVO)**
   - Bewerberdaten sind sensibel
   - Wo werden die Daten gespeichert?
   - Wie lange dürfen sie aufbewahrt werden?

3. **Qualitätssicherung**
   - Wie testet man AI-Bewertungen?
   - Sollte ein Mensch jede Bewertung prüfen?
   - Welche Metriken zeigen gute/schlechte Bewertungen?

4. **Skalierung**
   - Was bei 1000 Bewerbungen pro Tag?
   - Rate Limits der AI APIs
   - Kosten pro Bewerbung

### Bonus Challenges (wenn Zeit bleibt)

1. **Automatische Antwort-Email**: Füge einen Email-Node hinzu, der Bewerber automatisch informiert
2. **Multi-Language Support**: Bewerbungen in verschiedenen Sprachen
3. **CV Parsing**: Integration eines PDF-Parsers für hochgeladene Lebensläufe
4. **Ranking**: Sortiere Bewerber automatisch nach Score in einem separaten Sheet-Tab

### Troubleshooting Checkliste

- [ ] Ist der AI Agent mit einem Model verbunden?
- [ ] Ist das Tool Schema valide JSON Schema?
- [ ] Wird das Tool im Agent Output angezeigt?
- [ ] Sind die Google Sheets Credentials konfiguriert?
- [ ] Existiert das Sheet und sind die Spalten richtig benannt?
- [ ] Sind alle Field Mappings korrekt (keine Tippfehler)?
