# Hints

## ⚠️ Gmail Node Limitation

**Warning: Gmail-Tool will Error with other Mail-Hosts**

- ✅ `@gmail.com` addresses will work fine
- ❌ If you embedded your old email account into Gmail, you need to use **SMTP Node** instead
- ❌ Examples: `@hotmail.com`, `@gmx.de`, `@web.de`

The Gmail Node only works with native Gmail addresses. For other email providers, even if managed through Gmail, use the SMTP Node.

---

## Stuck? Hier sind einige Tipps:

### Tool Schema Probleme?

Das Tool Schema im AI Agent muss exakt dem JSON Schema Standard folgen. Achte darauf:
- `type: "object"` im Root
- Alle Properties definieren mit `type`, `description`
- Required fields im `required` Array angeben

### AI Agent gibt keine strukturierten Daten zurück?

Stelle sicher, dass:
- Das Tool korrekt definiert ist
- Der System Prompt klar sagt, dass das Tool verwendet werden soll
- Der User Prompt alle notwendigen Daten aus dem Formular übergibt

### Google Sheets Mapping funktioniert nicht?

Häufige Fehler:
- Node-Namen stimmen nicht überein (Case-sensitive!)
- Arrays müssen mit `.join()` zusammengefügt werden
- Prüfe die Output-Struktur des AI Agent Nodes

### Testen mit realistischen Daten

Erstelle mindestens 3 Test-Bewerbungen:
1. **Perfekte Bewerbung**: 10+ Jahre Erfahrung, perfekt passende Skills, hervorragendes Anschreiben
2. **Schwache Bewerbung**: Wenig Erfahrung, unpassende Skills, generisches Anschreiben
3. **Mittelmäßige Bewerbung**: Solide Erfahrung, teilweise passende Skills, okay Anschreiben

So kannst Du prüfen, ob der AI Agent fair und konsistent bewertet.

### Best Practice: Prompt Engineering

Für bessere Bewertungen, sage dem AI Agent:
- Auf welche Position genau bewertet werden soll
- Welche Skills besonders wichtig sind
- Welche Kriterien für EINLADEN/ABLEHNEN/WARTELISTE gelten

Beispiel im System Prompt:
```
Für diese Position sind wichtig: 5+ Jahre Erfahrung, React, TypeScript, Teamfähigkeit.
EINLADEN: Score 8+, alle wichtigen Skills vorhanden
WARTELISTE: Score 6-7, einige Skills fehlen
ABLEHNEN: Score <6 oder kritische Skills fehlen
```
