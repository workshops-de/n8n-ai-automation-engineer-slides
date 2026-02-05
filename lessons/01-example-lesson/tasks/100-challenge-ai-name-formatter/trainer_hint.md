# Trainer Hints

## Wichtige Punkte für die Durchführung

### Vorbereitung

1. **Google Sheet Template**: Erstelle ein vorbereitetes Sheet, das Teilnehmer kopieren können
2. **Chat URL Demo**: Zeige live, wie man die Chat URL findet und öffnet
3. **Tool Schema Vorlage**: Halte das JSON Schema bereit zum Copy-Paste
4. **AI Model Access**: Sicherstellen, dass alle Zugriff haben

### Häufige Stolpersteine

#### 1. Tool wird nicht aufgerufen

Das ist der häufigste Fehler! Ursachen:
- **System Prompt zu schwach**: "IMMER das Tool verwenden" muss explizit drin sein
- **Tool Schema Fehler**: JSON Schema muss 100% valide sein
- **Falsches Model**: Nicht alle Models sind gut in Tool-Use

**Lösung**: Zeige live, wie man prüft, ob das Tool aufgerufen wurde (im AI Agent Output)

#### 2. Chat Trigger Verwirrung

Teilnehmer verstehen oft nicht:
- Der Workflow muss **aktiviert** sein (nicht nur gespeichert)
- Die Chat URL ändert sich nicht, auch nach Änderungen
- Man kann den Chat in einem neuen Tab öffnen zum Testen

**Tipp**: Zeige den Unterschied zwischen "Save" und "Activate" deutlich

#### 3. Google Sheets Mapping

Häufige Fehler:
- Falsche Referenzen: `$json.original_name` statt `$('AI Agent').item.json.original_name`
- Node umbenannt, aber Referenzen nicht aktualisiert
- Annahme, dass Daten immer da sind (Tool könnte ja nicht aufgerufen werden)

### Zeitmanagement

- **5 Min**: Chat Trigger Setup und Demo
- **10 Min**: AI Agent mit Tool konfigurieren
- **5 Min**: Google Sheets Integration
- **5 Min**: Testing und Troubleshooting

### Demo-Tipps

Zeige live:
1. **Chat Trigger Setup**: Wie schnell man einen Chat erstellt
2. **Tool Definition**: Schreibe das JSON Schema live oder copy-paste
3. **System Prompt Wichtigkeit**: Zeige, was passiert, wenn man "IMMER Tool verwenden" weglässt
4. **Debug-Workflow**: Wie man prüft, ob das Tool aufgerufen wurde
5. **Google Sheets**: Live-Update beim Testen zeigen

### Erweiterte Diskussionspunkte

Nach der Übung:

1. **Tool-Use vs. Prompt-Only**
   - Wann sollte man Tools verwenden?
   - Vorteile: Strukturierte Ausgabe, Validierung
   - Nachteile: Komplexität, nicht alle Models unterstützen es gut

2. **Chat State Management**
   - Wie behält der Chat den Kontext?
   - Session IDs nutzen
   - Multi-Turn Conversations

3. **Kreativität vs. Konsistenz**
   - Wie kontrolliert man AI-Kreativität?
   - Temperature Settings
   - Few-Shot Examples im Prompt

4. **Production Considerations**
   - Rate Limits bei vielen gleichzeitigen Chats
   - Kosten pro Chat-Message
   - Error Handling: Was wenn der AI Agent nicht antwortet?

### Bonus Challenges (wenn Zeit bleibt)

1. **Themen-Auswahl**: Nutzer kann Thema wählen (Space, Superhelden, Mittelalter)
2. **Mehrere Varianten**: AI generiert 3 Nicknames zur Auswahl
3. **Persönlichkeit**: Zusätzliches Feld für Persönlichkeits-Typ
4. **Rating System**: Nutzer kann Nicknames bewerten (👍/👎)
5. **Statistik**: Separates Sheet mit Statistiken (Wie viele Nicknames pro Tag?)

### Troubleshooting Checkliste

- [ ] Ist der Workflow aktiviert (nicht nur gespeichert)?
- [ ] Ist das Tool Schema valides JSON?
- [ ] Steht "IMMER Tool verwenden" im System Prompt?
- [ ] Ist der AI Agent mit einem Model verbunden?
- [ ] Wird das Tool im AI Agent Output angezeigt?
- [ ] Sind Google Sheets Credentials konfiguriert?
- [ ] Sind die Field Mappings korrekt?
- [ ] Wurde der Chat tatsächlich getestet (nicht nur der Workflow ausgeführt)?

### Alternative Ansätze

Falls Tool-Use zu kompliziert ist:
- **Vereinfachung**: AI gibt nur den Nickname zurück (ohne Tool)
- **Regex Parsing**: Parse die AI Antwort mit Regex statt Tool
- **Strukturierter Output**: Nutze JSON Output Mode (manche Models)

### Model-Empfehlungen

Für Tool-Use am besten:
- GPT-4 (sehr zuverlässig)
- Claude Sonnet 3.5+ (exzellent)
- GPT-3.5-Turbo (okay, manchmal inkonsistent)

Weniger geeignet:
- Ältere oder kleinere Models
- Models ohne Tool/Function Calling Support
