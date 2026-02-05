# Hints

## ⚠️ Gmail Node Limitation

**Warning: Gmail-Tool will Error with other Mail-Hosts**

- ✅ `@gmail.com` addresses will work fine
- ❌ If you embedded your old email account into Gmail, you need to use **SMTP Node** instead
- ❌ Examples: `@hotmail.com`, `@gmx.de`, `@web.de`

The Gmail Node only works with native Gmail addresses. For other email providers, even if managed through Gmail, use the SMTP Node.

---

## System Prompt Beispiel

Falls du Hilfe beim System Prompt brauchst, hier ist ein funktionierendes Beispiel:

```
Du bist ein Social Media Content Creator, der Posts erstellt und als Dokumente speichert.

Du erhältst Topic und Platform aus einem Google Form Submission.

Deine Aufgabe:
1. Analysiere das eingereichte Topic
2. Erstelle einen passenden Post für die angegebene Plattform
3. Speichere den Post als Google Doc
4. Update die Zeile im Google Sheet mit Doc URL und Status

Regeln für Twitter (max 280 Zeichen):
- Kurz und prägnant
- 1-2 relevante Hashtags
- Hook oder Frage einbauen

Regeln für LinkedIn (max 300 Zeichen):
- Professioneller Ton
- Mehrwert oder Insight bieten
- Relevante Hashtags
- Call-to-Action

Workflow:
1. Generiere den Post basierend auf Topic und Platform
2. Nutze Google Docs Tool: Titel = "[Platform] - [Topic] - [Date]"
3. Nutze Google Sheets Update Tool (Status='Generated', Document URL, Generated Date)
```

Du kannst diesen Prompt anpassen und verbessern! Experimentiere mit verschiedenen Formulierungen.

---

## AI Agent mit mehreren Tools

Der Schlüssel zu dieser Challenge ist die richtige Konfiguration des AI Agents mit Tools:

### Tool-Reihenfolge verstehen

Der AI Agent entscheidet selbst, wann er welches Tool nutzt. Wichtig:
1. **Input vom Trigger**: Agent erhält Topic und Platform direkt vom Google Sheets Trigger
2. **Google Docs Tool**: Agent erstellt ein Dokument mit dem generierten Post
3. **Google Sheets Update Tool**: Agent nutzt dies am Ende, um Status und Doc URL einzutragen

### System Prompt ist entscheidend

Dein System Prompt muss dem Agent klar sagen:
- **Was** er tun soll (Topic lesen, Post erstellen, veröffentlichen, updaten)
- **Wann** er welches Tool nutzen soll
- **Wie** die Daten strukturiert sind

### Häufige Fehler

**"Trigger feuert nicht"**
- Prüfe ob der Workflow aktiviert ist
- Teste mit einem Form-Submit
- Schaue in die Execution History von n8n
- Prüfe ob das richtige Sheet und Tab ausgewählt ist

**"Agent erhält keine Daten vom Trigger"**
- Die Trigger-Daten sind in `$json` verfügbar
- Beispiel: `{{ $json.Topic }}` und `{{ $json.Platform }}`
- Prüfe im System Prompt ob du auf diese Daten verweist

**"Agent erstellt Doc, aber Updated das Sheet nicht"**
- Der Agent muss wissen, **welche Zeile** er updaten soll
- Tipp: Die Row ID kommt vom Trigger
- System Prompt: Erwähne explizit, dass er das Sheet nach dem Doc erstellen updaten soll
- Prüfe ob der Agent die Document URL aus dem Google Docs Tool bekommt

**"Google Doc wird erstellt aber ist leer"**
- Prüfe ob der Agent den generierten Post-Text wirklich in das Doc schreibt
- Tool Description muss klar sein: "Include the full post text in the document"
- System Prompt: Betone dass der GESAMTE Post im Doc stehen soll

**"Posts sind zu lang/kurz"**
- Verstärke die Character Limits im System Prompt
- Beispiel: "Twitter: MAXIMAL 280 Zeichen! Kürze notfalls den Text."

### Testing Tipps

1. Aktiviere den Workflow
2. Fülle das Google Form aus mit einem einfachen Test-Topic
3. Prüfe die n8n Execution History - wurde der Workflow getriggert?
4. Schaue dir die AI Agent Logs an, um zu sehen welche Tools er nutzt
5. Prüfe nach jedem Run, ob die Zeile im Sheet updated wurde

### Tool Descriptions Beispiele

**Google Docs Tool:**
```
Create a new Google Doc with the generated social media post. Use title format: '[Platform] - [Topic] - [Current Date]'. The document should contain the complete post text formatted nicely.
```

**Google Sheets Update Tool:**
```
Update the Google Sheet row that triggered this workflow. Set: Status='Generated', Document URL=(the URL of the created Google Doc), Generated Date=(current date).
```

## Debugging

Wenn der Workflow nicht funktioniert:
1. Öffne die AI Agent Execution Logs
2. Schaue welche Tools der Agent tatsächlich aufgerufen hat
3. Prüfe die Tool-Responses: Kommen Daten zurück?
4. Verfeinere den System Prompt basierend auf dem Agent-Verhalten

---

## Bonus: Human-in-the-Loop Hints

Falls du die Human Review Bonus-Challenge machst:

### System Prompt Beispiel mit Human Review

```
Du bist ein Social Media Expert, der Posts erstellt und zur Genehmigung vorlegt.

Deine Aufgabe:
1. Hole ungepostete Topics aus Google Sheets
2. Erstelle einen passenden Post für die angegebene Plattform
3. Sende den Post per Email zur Human Review (Gmail Send and Wait Tool)
4. Warte auf Genehmigung (Approve/Reject)
5. WENN APPROVED: Veröffentliche den Post auf der richtigen Plattform
6. WENN APPROVED: Markiere das Topic in Google Sheets als "Posted"
7. WENN REJECTED: Breche ab ohne zu posten

WICHTIG: Workflow-Reihenfolge
1. Google Sheets Read Tool
2. Generiere Post Content
3. Gmail Send and Wait Tool (WARTE auf Antwort!)
4. NUR bei Approval: Twitter/LinkedIn Tool
5. NUR bei Approval: Google Sheets Update Tool
```

### Tool Description: Gmail Send and Wait

```
Send an email for human review and WAIT for approval/rejection. Include the generated post text, topic name, and target platform. The workflow will pause until the recipient clicks Approve or Reject in the email.
```

### Häufige Fehler bei Human Review

**"Agent postet ohne auf Approval zu warten"**
- Prüfe die Tool Descriptions: Sind Twitter/LinkedIn Tools klar als "ONLY after approval" markiert?
- System Prompt: Betone die Reihenfolge mit GROSSBUCHSTABEN
- Tipp: Nutze Wörter wie "WARTE", "NUR WENN APPROVED"

**"Gmail Send and Wait funktioniert nicht"**
- Gmail OAuth2 muss korrekt verbunden sein
- Email-Adresse muss @gmail.com sein (nicht @hotmail, @gmx, etc.)
- Approve/Reject Options müssen im Node konfiguriert sein
- Der Agent muss explizit wissen, dass er auf die Antwort warten soll
