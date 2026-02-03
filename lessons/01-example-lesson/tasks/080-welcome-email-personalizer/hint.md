# Hints

## Stuck? Hier sind einige Tipps:

### AI Agent Output finden

Der AI Agent gibt verschiedene Formate aus, je nach Model:
- Bei manchen Models: `$json.output`
- Bei anderen: `$json.text` oder `$json.message`
- **Tipp**: Führe den AI Agent testweise aus und schau dir den Output im Node an!

### Email wird nicht versendet?

Häufige Probleme:
1. **SMTP Credentials falsch**: Prüfe Username/Password
2. **Gmail App-Password**: Gmail benötigt ein spezielles App-Password (siehe Bonus)
3. **Port falsch**: Meist 587 (TLS) oder 465 (SSL)
4. **Firewall/Netzwerk**: Manche Netzwerke blocken SMTP

### Field Mapping Fehler

Achte auf korrekte Node-Referenzen:
- `{{ $('n8n Form Trigger').item.json.name }}`
- Der Node-Name muss **exakt** übereinstimmen (Case-sensitive!)
- Wenn Du den Node umbenannt hast, passe die Referenzen an

### Email Personalisierung funktioniert nicht

Stelle sicher, dass:
- Der Name aus dem Form korrekt im User Prompt übergeben wird
- Der System Prompt den AI Agent anweist, den Namen zu verwenden
- Die Email den AI Agent Output korrekt referenziert

### Test-Emails

Für Tests kannst Du auch an deine eigene Email-Adresse senden:
- Trage deine eigene Email im Formular ein
- So siehst Du direkt das Ergebnis

### Gmail App-Password Setup (Bonus)

1. Gehe zu Google Account → Security
2. Aktiviere 2-Factor Authentication (falls nicht aktiv)
3. Gehe zu "App passwords"
4. Erstelle ein neues App-Password für "Mail"
5. Kopiere das generierte Password (16 Zeichen)
6. Verwende dieses statt deines normalen Passworts in n8n
