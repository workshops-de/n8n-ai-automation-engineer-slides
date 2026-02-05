# Trainer Hints

## Wichtige Punkte für die Durchführung

### Vorbereitung

1. **Email Setup vorab klären**: Viele Teilnehmer haben Probleme mit SMTP Credentials
   - Gmail App-Passwords Anleitung bereithalten
   - Alternative: Outlook, oder n8n's eigenen Email Service zeigen
2. **Test-Email Adressen**: Empfehle Teilnehmern, an sich selbst zu senden
3. **AI Model Access**: Sicherstellen, dass alle Zugriff auf ein AI Model haben

### Häufige Stolpersteine

#### 1. SMTP Authentifizierung

Die meisten Probleme entstehen hier:
- **Gmail**: Benötigt App-Password, nicht normales Passwort
- **Outlook/Office365**: Manchmal spezielle Auth-Settings
- **Firmen-Email**: Oft blockiert/eingeschränkt

**Lösung**: Zeige Gmail App-Password Setup live, oder nutze einen Test-SMTP Service wie Mailtrap oder Ethereal Email

#### 2. AI Agent Output Struktur

Je nach gewähltem Model ist der Output unterschiedlich:
- GPT Models: Oft `output` oder `text`
- Claude: Meist `text` oder `content`
- **Wichtig**: Teilnehmer müssen den Output inspizieren!

**Tipp**: Zeige live, wie man den Node Output inspiziert und die richtige Property findet

#### 3. Form → AI → Email Mapping

Teilnehmer verwechseln oft:
- Welcher Node welche Daten hat
- Korrekte Referenzierung: `$('NodeName').item.json.field`
- Case-Sensitivity bei Node-Namen

### Zeitmanagement

- **5 Min**: Form Setup
- **10 Min**: AI Agent konfigurieren und testen
- **10 Min**: Email Node Setup und Troubleshooting

### Demo-Tipps

Zeige live:
1. Wie man ein n8n Form erstellt (sehr schnell!)
2. Wie man den AI Agent Output inspiziert
3. Wie man die Felder richtig mappt
4. Eine Test-Email von Anfang bis Ende

### Erweiterte Diskussionspunkte

Nach der Übung:

1. **Email-Zustellbarkeit**
   - SPF, DKIM, DMARC Records
   - Warum landen Emails im Spam?
   - Production-Ready Email Services (SendGrid, AWS SES)

2. **Personalisierung**
   - Wie weit sollte Personalisierung gehen?
   - Risiken von AI-generierten Emails (Halluzinationen, Tone)
   - A/B Testing für Email-Varianten

3. **Skalierung**
   - Was bei 10.000 Sign-ups pro Tag?
   - Rate Limits von AI APIs
   - Queue-Systeme für Email-Versand

4. **Datenschutz**
   - Email-Adressen sind personenbezogene Daten
   - Opt-in/Opt-out Mechanismen
   - DSGVO-konforme Email-Speicherung

### Bonus Challenges (wenn Zeit bleibt)

1. **Multi-Language Support**: Form-Feld für Sprache, AI generiert in gewählter Sprache
2. **Emoji-Personalisierung**: AI fügt passende Emojis basierend auf Namen/Stimmung ein
3. **HTML Email**: Nutze HTML statt Plain Text für styled Emails
4. **Welcome-Serie**: Nicht nur eine Email, sondern eine Serie mit Delays

### Troubleshooting Checkliste

- [ ] Sind SMTP Credentials korrekt?
- [ ] Ist der AI Agent mit einem Model verbunden?
- [ ] Wurde der AI Agent testweise ausgeführt?
- [ ] Ist der Output des AI Agents korrekt gemappt?
- [ ] Sind alle Node-Referenzen korrekt geschrieben?
- [ ] Ist der Workflow aktiviert?
- [ ] Wurde das Formular ausgefüllt und abgesendet?

### Alternative: Email-less Testing

Falls Email-Setup zu problematisch ist:
- Zeige den generierten Email-Text nur im Workflow Output
- Oder schreibe ihn in eine Google Sheets Spalte
- Fokus auf AI-Personalisierung statt Email-Technik
