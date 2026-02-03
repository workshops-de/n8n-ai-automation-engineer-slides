# Hints

## Stuck? Hier sind einige Tipps:

### Chat Trigger funktioniert nicht?

Häufige Probleme:
- **Workflow nicht aktiviert**: Der Workflow muss aktiviert sein, nicht nur gespeichert
- **Falsche URL**: Kopiere die Chat URL direkt aus dem Chat Trigger Node
- **Browser-Cache**: Manchmal hilft ein Hard-Refresh (Cmd+Shift+R / Ctrl+Shift+R)

### AI Agent ruft das Tool nicht auf

Mögliche Ursachen:
1. **Tool Schema falsch**: JSON Schema muss valide sein
2. **System Prompt unklar**: Sage explizit "Verwende IMMER das save_nickname Tool"
3. **Model-Problem**: Manche Models sind besser im Tool-Use (GPT-4, Claude Sonnet)

**Tipp**: Teste den AI Agent manuell und schau dir den Output an - wird das Tool aufgerufen?

### Google Sheets Mapping Fehler

Prüfe:
- **Tool wurde aufgerufen**: Nur dann gibt es die Daten im Output
- **Richtige Pfade**: `$('AI Agent').item.json.original_name` - exakt so schreiben
- **Node-Namen**: Sind die Node-Namen korrekt? (Case-sensitive!)

### AI Agent speichert nicht ins Sheet

Debug-Schritte:
1. Führe den Chat aus und gib einen Namen ein
2. Prüfe den Output des AI Agent Nodes - siehst du `original_name`, `nickname`, `explanation`?
3. Wenn ja: Google Sheets Mapping prüfen
4. Wenn nein: Tool wird nicht aufgerufen - System Prompt anpassen

### Chat antwortet nicht

Stelle sicher:
- AI Agent ist mit einem Model verbunden
- API Credentials sind korrekt
- Der Workflow ist aktiviert (nicht nur gespeichert!)

### Testing Tipp

Für schnelleres Testing:
- Öffne den Chat in einem separaten Browser-Tab
- Führe den Workflow manuell aus (mit Test-Daten)
- Prüfe jeden Node einzeln

### Beispiel Namen zum Testen

Probiere verschiedene Namen-Typen:
- Kurze Namen: "Max", "Tim", "Lea"
- Lange Namen: "Maximilian", "Elisabeth"
- Doppelnamen: "Anna-Lena", "Jan-Philipp"
- Ungewöhnliche Namen: "Xaver", "Quintus"

So siehst du, wie kreativ der AI Agent wirklich ist!
