<!-- Automatisch erzeugt aus fragen.md mit `npm run exam` – nicht manuell bearbeiten. -->

# Prüfungsfragen – AI Automation Engineer mit n8n (Modul 1 & 2)

| Name | Datum | Erreichte Punkte |
|---|---|---|
| | | von 72 |

## Hinweise zur Bearbeitung

- Die Prüfung umfasst 50 Fragen mit jeweils 3–4 Antwortmöglichkeiten.
- Bei Fragen mit dem Hinweis *(Eine Antwort richtig)* ist genau eine Antwort richtig.
- Bei Fragen mit dem Hinweis *(Mehrere Antworten möglich)* können eine oder mehrere Antworten richtig sein.
- Punkte gibt es nur, wenn genau die richtigen Antworten angekreuzt sind. Teilpunkte werden nicht vergeben.

# Teil A – Modul 1: Automation with AI Agents

## Frage 1 (1 Punkt)

Welche Definition von künstlicher Intelligenz (KI) wurde in der Schulung verwendet? *(Eine Antwort richtig)*

- [ ] A) Programme, die ausschließlich fest programmierte Wenn-Dann-Regeln abarbeiten
- [ ] B) Systeme oder Maschinen, die Aufgaben ausführen können, die normalerweise menschliche Intelligenz erfordern
- [ ] C) Datenbanken, die sehr große Mengen an Text speichern und durchsuchen
- [ ] D) Roboter, die ein eigenes Bewusstsein entwickelt haben

---

## Frage 2 (2 Punkte)

Welche Aussagen zu Large Language Models (LLMs) wie ChatGPT, Claude oder Gemini sind korrekt? *(Mehrere Antworten möglich)*

- [ ] A) Sie wurden mit sehr großen Textmengen trainiert, unter anderem aus dem Internet.
- [ ] B) Sie greifen bei jeder Antwort automatisch auf das aktuelle Internet zu.
- [ ] C) Sie erzeugen Antworten, indem sie das jeweils nächste Wort vorhersagen.
- [ ] D) Man kann bei jeder Antwort genau nachvollziehen, warum das Modell ein bestimmtes Wort gewählt hat.

---

## Frage 3 (2 Punkte)

In welchen Situationen ist laut Schulung ein No-Code-Tool wie n8n einer Eigenentwicklung vorzuziehen? *(Mehrere Antworten möglich)*

- [ ] A) Ideen sollen schnell getestet werden.
- [ ] B) Es steht kein eigenes Tech-Team zur Verfügung.
- [ ] C) Volle Kontrolle und vollständiges Eigentum am Code sind entscheidend.
- [ ] D) Die Lösung muss extrem stark skalieren und langfristig möglichst günstig betrieben werden.

---

## Frage 4 (2 Punkte)

Welche Aussagen zu n8n sind korrekt? *(Mehrere Antworten möglich)*

- [ ] A) n8n ist ein Open-Source-Tool zur Workflow-Automatisierung.
- [ ] B) n8n kann ausschließlich als bezahlter Cloud-Dienst genutzt werden.
- [ ] C) Mit n8n lassen sich wiederkehrende Aufgaben wie E-Mail-Versand oder Tabellen-Updates ohne komplexen Code automatisieren.
- [ ] D) Für jeden n8n-Workflow muss zusätzlich eigener Programmcode geschrieben werden.

---

## Frage 5 (1 Punkt)

Aus welchen grundlegenden Bausteinen besteht ein n8n-Workflow? *(Eine Antwort richtig)*

- [ ] A) Aus Tabellen, Zeilen und Spalten
- [ ] B) Aus Prompts, Chunks und Embeddings
- [ ] C) Aus einem Trigger Node und Action Nodes
- [ ] D) Aus Frontend, Backend und Datenbank

---

## Frage 6 (2 Punkte)

Welche Aussagen zu Credentials in n8n sind korrekt? *(Mehrere Antworten möglich)*

- [ ] A) Credentials in einem Projekt werden mit allen Projektmitgliedern geteilt.
- [ ] B) Private Zugangsdaten wie ein Gmail-Login sollten in Projekten abgelegt werden.
- [ ] C) Credentials können API Keys, OAuth-Tokens oder Login/Passwort enthalten.
- [ ] D) Credentials sind immer an genau einen Workflow gebunden.

---

## Frage 7 (2 Punkte)

Wofür werden Action Nodes in n8n eingesetzt? *(Mehrere Antworten möglich)*

- [ ] A) Um Daten innerhalb eines Workflows zu verändern
- [ ] B) Um Operationen in externen Systemen auszuführen
- [ ] C) Um einen Workflow zu einem festgelegten Zeitpunkt zu starten
- [ ] D) Um Credentials zwischen Projekten zu verschieben

---

## Frage 8 (1 Punkt)

Ein Unternehmen möchte jeden Morgen automatisch einen Bericht per E-Mail verschicken. Welcher Trigger ist dafür am besten geeignet? *(Eine Antwort richtig)*

- [ ] A) Manual Trigger
- [ ] B) Webhook Trigger
- [ ] C) Chat Trigger
- [ ] D) Schedule Trigger

---

## Frage 9 (1 Punkt)

Ein Schedule Trigger ist mit der Cron-Expression `0 9 * * *` konfiguriert. Wann startet der Workflow? *(Eine Antwort richtig)*

- [ ] A) Alle 9 Minuten
- [ ] B) Täglich um 9:00 Uhr
- [ ] C) Am 9. Tag jedes Monats um 0:00 Uhr
- [ ] D) Jeden Montag um 9:00 Uhr

---

## Frage 10 (2 Punkte)

Welche Aussagen zum Webhook Trigger sind korrekt? *(Mehrere Antworten möglich)*

- [ ] A) Er wartet auf eingehende HTTP-Requests und startet dann den Workflow.
- [ ] B) Die generierte Webhook-URL wird an externe Dienste weitergegeben.
- [ ] C) Er fragt in festen Zeitabständen selbstständig externe Dienste nach neuen Daten ab.
- [ ] D) Die HTTP-Methode, z. B. GET oder POST, ist konfigurierbar.

---

## Frage 11 (1 Punkt)

Wofür wird der Manual Trigger typischerweise verwendet? *(Eine Antwort richtig)*

- [ ] A) Zum Testen von Workflows während der Entwicklung oder für einmalige, von Menschen angestoßene Abläufe
- [ ] B) Für nächtliche, automatisch laufende Backups ohne menschliches Zutun
- [ ] C) Für den Empfang von Zahlungsbestätigungen externer Dienste in Echtzeit

---

## Frage 12 (2 Punkte)

Was unterscheidet den AI Agent Node von einem einfachen Prompt-Response-Aufruf eines Sprachmodells? *(Mehrere Antworten möglich)*

- [ ] A) Er kann Probleme in mehrere Teilschritte zerlegen.
- [ ] B) Er garantiert fehlerfreie Antworten ohne Halluzinationen.
- [ ] C) Er kann selbstständig entscheiden, welche angebundenen Tools er nutzt.
- [ ] D) Er funktioniert auch ohne angebundenes Sprachmodell.

---

## Frage 13 (1 Punkt)

Sie haben einen AI Agent mit einem Chat Trigger gebaut. Wie testen Sie ihn am einfachsten direkt im n8n-Editor? *(Eine Antwort richtig)*

- [ ] A) Indem Sie die Webhook-URL im Browser aufrufen
- [ ] B) Indem Sie zusätzlich einen Schedule Trigger ergänzen
- [ ] C) Über das Chat-Fenster unten im Canvas, in dem Sie Nachrichten simulieren können
- [ ] D) Gar nicht, Chat Trigger funktionieren nur in Slack oder Microsoft Teams

---

## Frage 14 (1 Punkt)

Welche drei Grundbausteine eines guten Prompts wurden in der Schulung vorgestellt? *(Eine Antwort richtig)*

- [ ] A) Trigger, Action, Result
- [ ] B) Begrüßung, Fragestellung, Verabschiedung
- [ ] C) Input, mathematisches Modell, Output
- [ ] D) Rollendefinition, Kontext, Aufgabenstellung

---

## Frage 15 (1 Punkt)

In einem System Prompt steht `Company: {{ $json.company_name }}`. Was bewirkt der Ausdruck in den doppelten geschweiften Klammern? *(Eine Antwort richtig)*

- [ ] A) Er fügt den Wert des Feldes `company_name` aus den eingehenden Daten dynamisch in den Prompt ein.
- [ ] B) Er fordert das Sprachmodell auf, einen passenden Firmennamen zu erfinden.
- [ ] C) Er ist ein Kommentar und wird vom Sprachmodell ignoriert.
- [ ] D) Er speichert den Firmennamen dauerhaft in einer Datenbank.

---

## Frage 16 (2 Punkte)

Im Beispiel-Prompt zur Lead-Qualifizierung wird ein exaktes Ausgabeformat vorgegeben, z. B. „LEAD SCORE: [Number 1-100]“. Welche Vorteile hat das? *(Mehrere Antworten möglich)*

- [ ] A) Die Antworten sind über viele Ausführungen hinweg einheitlich aufgebaut.
- [ ] B) Die Ergebnisse lassen sich in nachfolgenden Nodes leichter weiterverarbeiten, z. B. für ein CRM.
- [ ] C) Das Sprachmodell wird dadurch dauerhaft mit den Lead-Daten neu trainiert.

---

## Frage 17 (2 Punkte)

Welche Vorteile bietet ein Memory, das an einen AI Agent angebunden ist? *(Mehrere Antworten möglich)*

- [ ] A) Der Gesprächsverlauf bleibt über mehrere Nachrichten hinweg erhalten.
- [ ] B) Der Agent kann sich Vorlieben und Angaben des Nutzers merken.
- [ ] C) Der Agent benötigt kein Sprachmodell mehr.
- [ ] D) Der Agent erhält automatisch Zugriff auf aktuelle Informationen aus dem Internet.

---

## Frage 18 (1 Punkt)

Was legen Sie beim Simple Memory mit der Einstellung „Context Window Length“ fest? *(Eine Antwort richtig)*

- [ ] A) Die maximale Länge einer einzelnen Antwort des Sprachmodells
- [ ] B) Wie viele vorherige Interaktionen dem Sprachmodell als Kontext mitgegeben werden
- [ ] C) Wie lange ein Workflow maximal laufen darf
- [ ] D) Wie viele Tools der Agent gleichzeitig nutzen darf

---

## Frage 19 (1 Punkt)

Sie möchten einen Dienst anbinden, für den es in n8n keine eigene Integration gibt, der aber eine REST-API anbietet. Welcher Node ist dafür vorgesehen? *(Eine Antwort richtig)*

- [ ] A) Schedule Trigger
- [ ] B) Simple Memory
- [ ] C) HTTP Request Node
- [ ] D) Default Data Loader

---

## Frage 20 (2 Punkte)

Welche Aussagen zur Perplexity-Integration als Tool eines AI Agents sind korrekt? *(Mehrere Antworten möglich)*

- [ ] A) Der Agent erhält Zugriff auf aktuelle Informationen, die über seine Trainingsdaten hinausgehen.
- [ ] B) Die Antworten enthalten Quellenangaben, was Halluzinationen reduziert.
- [ ] C) Die Suchanfrage kann mit `$fromAI()` dynamisch vom Agenten befüllt werden.
- [ ] D) Für die Nutzung ist kein API-Key erforderlich.

---

## Frage 21 (1 Punkt)

Welcher der folgenden Ausdrücke ist gültiges JSON? *(Eine Antwort richtig)*

- [ ] A) `{ name: "Hans", age: 23 }`
- [ ] B) `{ "name": "Hans", "age": 23, "happy": true }`
- [ ] C) `{ 'name': 'Hans', 'age': 23 }`
- [ ] D) `{ "name": "Hans", "age": 23, }`

---

## Frage 22 (2 Punkte)

Welche Bestandteile gehören zum Error Handling in n8n? *(Mehrere Antworten möglich)*

- [ ] A) Ein eigener Error-Workflow mit einem Error Trigger
- [ ] B) Das Hinterlegen des Error-Workflows in den Workflow-Einstellungen
- [ ] C) Ein Chat Trigger, der Fehlermeldungen automatisch beantwortet
- [ ] D) Der Stop And Error Node, um einen Fehler gezielt auszulösen

---

## Frage 23 (1 Punkt)

Ein Tool eines AI Agents schlägt fehl, der Workflow läuft aber trotzdem „erfolgreich“ durch. Wie wurde in der Schulung empfohlen, solche Tool-Fehler abzufangen? *(Eine Antwort richtig)*

- [ ] A) Fehlermeldungen von Tools im System Prompt verbieten, damit der Workflow nicht abbricht
- [ ] B) Das Sprachmodell gegen ein größeres Modell austauschen, das keine Tool-Fehler macht
- [ ] C) Die Context Window Length erhöhen, damit der Agent sich an frühere Fehler erinnert
- [ ] D) Den Agenten bei Fehlern „error“ ausgeben lassen, dies per If Node prüfen und mit Stop And Error abbrechen

---

## Frage 24 (2 Punkte)

Aus welchen Gründen setzt man Retrieval-Augmented Generation (RAG) ein? *(Mehrere Antworten möglich)*

- [ ] A) Um auf Informationen zuzugreifen, die über die Trainingsdaten des Modells hinausgehen
- [ ] B) Um unternehmenseigenes Wissen nutzbar zu machen
- [ ] C) Um das Sprachmodell dauerhaft mit neuen Daten nachzutrainieren
- [ ] D) Um Halluzinationen zu reduzieren und Antworten auf Fakten zu stützen

---

## Frage 25 (1 Punkt)

In welcher Reihenfolge laufen die Schritte eines RAG-Systems ab? *(Eine Antwort richtig)*

- [ ] A) Embeddings erzeugen → Dokument hochladen → in Chunks aufteilen → semantisch suchen
- [ ] B) Semantisch suchen → Dokument hochladen → Embeddings erzeugen → in Chunks aufteilen
- [ ] C) Dokument hochladen → in Chunks aufteilen → Embeddings erzeugen → semantisch suchen
- [ ] D) In Chunks aufteilen → semantisch suchen → Dokument hochladen → Embeddings erzeugen

---

## Frage 26 (1 Punkt)

Was sind Embeddings im Kontext eines Vector Stores? *(Eine Antwort richtig)*

- [ ] A) Zahlenvektoren, die die Bedeutung eines Textes abbilden, sodass ähnliche Inhalte nahe beieinanderliegen
- [ ] B) Verschlüsselte Passwörter für den Zugriff auf die Datenbank
- [ ] C) Komprimierte Kopien der hochgeladenen PDF-Dateien
- [ ] D) Manuell gepflegte Schlagwortlisten zu jedem Dokument

---

# Teil B – Modul 2: Multi-Agent-Systeme & MCPs

## Frage 27 (2 Punkte)

Warum setzt man für einen AI Agent ein persistentes Memory statt des Simple Memory ein? *(Mehrere Antworten möglich)*

- [ ] A) Der Inhalt des Simple Memory geht nach einem Neustart oder Update von n8n verloren.
- [ ] B) Gespräche werden gespeichert und sind dadurch nachvollziehbar (auditierbar).
- [ ] C) Man kann ein Gespräch zu einem späteren Zeitpunkt fortsetzen.
- [ ] D) Persistentes Memory erlaubt ein unbegrenzt großes Kontextfenster ohne zusätzliche Kosten.

---

## Frage 28 (1 Punkt)

Warum ist es keine gute Lösung, statt eines persistenten Memorys einfach die Context Window Length stark zu erhöhen? *(Eine Antwort richtig)*

- [ ] A) n8n erlaubt höchstens fünf gespeicherte Nachrichten pro Gespräch.
- [ ] B) Die Kosten steigen schnell, und der Verlauf ist trotzdem nicht dauerhaft gespeichert.
- [ ] C) Der Agent verliert dadurch den Zugriff auf seine Tools.

---

## Frage 29 (1 Punkt)

Was beschreibt eine relationale Datenbank am besten? *(Eine Antwort richtig)*

- [ ] A) Ein Speicher, der Texte ausschließlich als Zahlenvektoren für die semantische Suche ablegt
- [ ] B) Eine Ordnerstruktur, in der Dateien wie PDFs abgelegt werden
- [ ] C) Ein flüchtiger Zwischenspeicher, der nur während einer Workflow-Ausführung existiert
- [ ] D) Ein System, das Daten in Tabellen mit Zeilen und Spalten organisiert, die über gemeinsame Felder verknüpft sind

---

## Frage 30 (2 Punkte)

Welche Aussagen zur Anbindung eines Postgres Chat Memory mit Neon sind korrekt? *(Mehrere Antworten möglich)*

- [ ] A) Neon stellt PostgreSQL als Cloud-Dienst bereit.
- [ ] B) Die Tabelle für den Chatverlauf muss vorher manuell per SQL angelegt werden.
- [ ] C) Die Verbindungsdaten werden in Neon über „Parameters only“ kopiert und als Credential in n8n eingetragen.
- [ ] D) Neon ist eine Vector-Datenbank und ersetzt Pinecone.

---

## Frage 31 (2 Punkte)

Welche Merkmale beschreiben ein Multi-Agent-System? *(Mehrere Antworten möglich)*

- [ ] A) Es arbeitet mit mehreren Agenten statt mit einem einzigen LLM.
- [ ] B) Jeder Agent hat eine eigene, über seinen Prompt definierte Rolle.
- [ ] C) Ein einzelner Agent erhält möglichst alle verfügbaren Tools.
- [ ] D) Die Agenten kommunizieren miteinander und übergeben sich Ergebnisse.

---

## Frage 32 (2 Punkte)

Welche Gründe sprechen laut Schulung für ein Multi-Agent-System? *(Mehrere Antworten möglich)*

- [ ] A) Spezialisierte Agenten liefern bessere Ergebnisse als ein einzelner Generalist.
- [ ] B) Monolithische Agenten skalieren besonders gut.
- [ ] C) Für jede Teilaufgabe kann das jeweils passendste LLM gewählt werden.
- [ ] D) Die Betriebskosten sind immer niedriger als bei einem einzelnen Agenten.

---

## Frage 33 (1 Punkt)

Welche Nachteile von Multi-Agent-Systemen wurden in der Schulung genannt? *(Eine Antwort richtig)*

- [ ] A) Höhere Kosten und längere Latenz
- [ ] B) Schlechtere Ergebnisqualität und weniger Spezialisierung
- [ ] C) Keine Möglichkeit, Tools zu verwenden

---

## Frage 34 (1 Punkt)

Ein Proof-Reader-Agent prüft den Text eines Writer-Agents und schickt ihn so lange zurück, bis ein Qualitätskriterium erfüllt ist. Welches Pattern liegt vor? *(Eine Antwort richtig)*

- [ ] A) Parallel
- [ ] B) Sequential
- [ ] C) Loop
- [ ] D) Router

---

## Frage 35 (1 Punkt)

Ein Kundensupport-System soll Anfragen je nach Inhalt an einen Agenten für technische Probleme, einen für Zahlungsfragen oder einen für Versandfragen weiterleiten. Welches Pattern passt? *(Eine Antwort richtig)*

- [ ] A) Parallel
- [ ] B) Sequential
- [ ] C) Loop
- [ ] D) Router

---

## Frage 36 (1 Punkt)

Ein Artikel soll gleichzeitig von einem Agenten inhaltlich und von einem anderen auf Rechtschreibung geprüft werden. Die Ergebnisse werden anschließend zusammengeführt. Welches Pattern liegt vor? *(Eine Antwort richtig)*

- [ ] A) Parallel
- [ ] B) Sequential
- [ ] C) Router
- [ ] D) Network

---

## Frage 37 (1 Punkt)

Ein Agent generiert Code, ein zweiter reviewt ihn, ein dritter übernimmt das Deployment. Jeder Schritt baut auf dem Ergebnis des vorherigen auf. Welches Pattern ist das? *(Eine Antwort richtig)*

- [ ] A) Parallel
- [ ] B) Sequential
- [ ] C) Network
- [ ] D) Router

---

## Frage 38 (1 Punkt)

Ein Ärzteteam aus Diagnostiker, Chirurg und Pharmakologe soll komplexe Fälle gemeinsam besprechen. Es gibt keinen zentralen Koordinator, die Agenten kommunizieren frei miteinander. Welches Pattern passt? *(Eine Antwort richtig)*

- [ ] A) Sequential
- [ ] B) Router
- [ ] C) Network
- [ ] D) Loop

---

## Frage 39 (2 Punkte)

Welche Aussagen zu den Multi-Agent-Patterns sind korrekt? *(Mehrere Antworten möglich)*

- [ ] A) Beim Router-Pattern werden nur die für die Anfrage relevanten Agenten aktiviert.
- [ ] B) Beim Sequential-Pattern arbeiten alle Agenten gleichzeitig und unabhängig voneinander.
- [ ] C) Das Loop-Pattern eignet sich, wenn die Ausgabequalität wichtiger ist als die Geschwindigkeit.
- [ ] D) Beim Network-Pattern gibt es immer einen zentralen Controller-Agenten.

---

## Frage 40 (2 Punkte)

Mit welchen Mitteln lassen sich Multi-Agent-Systeme in n8n umsetzen? *(Mehrere Antworten möglich)*

- [ ] A) Mit dem AI Agent Tool, also einem Agenten, der als Tool an einen anderen Agenten angebunden ist
- [ ] B) Mit dem Sub-Workflow Tool, das einen separaten Workflow mit eigenem Agenten aufruft
- [ ] C) Mit mehreren Agenten, die in einem Workflow hintereinander oder parallel geschaltet sind
- [ ] D) Nur über externe Python-Skripte, da n8n lediglich einen Agenten pro Workflow erlaubt

---

## Frage 41 (1 Punkt)

Wann ist das Sub-Workflow Tool dem AI Agent Tool vorzuziehen? *(Eine Antwort richtig)*

- [ ] A) Wenn ein möglichst einfaches Setup für ein kleines System gewünscht ist
- [ ] B) Wenn der Teil-Agent komplexe eigene Abläufe hat und getrennt getestet und debuggt werden soll
- [ ] C) Wenn der Teil-Agent kein Sprachmodell benötigt
- [ ] D) Wenn alle Agenten zwingend im selben Canvas sichtbar sein müssen

---

## Frage 42 (1 Punkt)

Mit welchem Trigger beginnt ein Sub-Workflow, der von einem anderen Workflow als Tool aufgerufen wird? *(Eine Antwort richtig)*

- [ ] A) „When Executed by Another Workflow“ (Execute Workflow Trigger)
- [ ] B) Schedule Trigger
- [ ] C) Chat Trigger

---

## Frage 43 (2 Punkte)

Welche Aussagen zum Model Context Protocol (MCP) sind korrekt? *(Mehrere Antworten möglich)*

- [ ] A) MCP ist ein standardisiertes Protokoll, um KI-Modelle mit Tools, Daten und Diensten zu verbinden.
- [ ] B) MCP ist ein eigenes Sprachmodell, das Tools überflüssig macht.
- [ ] C) Ein MCP-Server stellt seine Fähigkeiten über klar definierte Schemas bereit, die jeder kompatible KI-Client versteht.
- [ ] D) MCP funktioniert nur mit Agenten, die in n8n gebaut wurden.

---

## Frage 44 (1 Punkt)

Welchen Vorteil bietet ein MCP-Server gegenüber individuell angebundenen APIs? *(Eine Antwort richtig)*

- [ ] A) Er macht eine Authentifizierung grundsätzlich überflüssig.
- [ ] B) Er beschleunigt die Antwortzeit des Sprachmodells.
- [ ] C) Er bietet eine einheitliche, selbsterklärende Schnittstelle, die mehrere Clients leicht nutzen können.
- [ ] D) Er speichert Gesprächsverläufe dauerhaft in einer Datenbank.

---

## Frage 45 (2 Punkte)

Welche Aussagen zu MCP in n8n sind korrekt? *(Mehrere Antworten möglich)*

- [ ] A) Mit dem MCP Server Trigger stellt man Tools aus n8n als MCP-Server bereit.
- [ ] B) Ein MCP-Server in n8n benötigt zusätzlich immer einen Schedule Trigger.
- [ ] C) Mit dem MCP Client Tool kann ein AI Agent die Tools eines MCP-Servers nutzen.

---

## Frage 46 (1 Punkt)

Ihr Newsletter-Versand soll so bereitgestellt werden, dass auch andere KI-Clients wie Claude Desktop Abonnenten abrufen und einzelne E-Mails versenden können. Was bauen Sie? *(Eine Antwort richtig)*

- [ ] A) Einen Workflow mit Schedule Trigger, der täglich alle E-Mails verschickt
- [ ] B) Ein Simple Memory, in dem die Abonnenten gespeichert werden
- [ ] C) Einen Vector Store mit allen bisherigen Newslettern
- [ ] D) Einen MCP-Server mit Tools zum Abrufen der Abonnenten und zum Versenden einzelner E-Mails

---

## Frage 47 (2 Punkte)

Welche Risiken sollen Guardrails verringern? *(Mehrere Antworten möglich)*

- [ ] A) Die Erzeugung schädlicher oder toxischer Inhalte
- [ ] B) Datenlecks und Verletzungen der Privatsphäre
- [ ] C) Lange Ladezeiten des n8n-Editors
- [ ] D) Missbrauch, z. B. für Phishing oder Betrug

---

## Frage 48 (1 Punkt)

Wie heißt ein Guardrail, der die Antworten des Modells prüft, bevor sie an den Nutzer ausgeliefert werden? *(Eine Antwort richtig)*

- [ ] A) Input Guardrail
- [ ] B) Output Guardrail
- [ ] C) Retrieval Guardrail

---

## Frage 49 (2 Punkte)

Welche Aussagen zu Guardrails in n8n sind korrekt? *(Mehrere Antworten möglich)*

- [ ] A) Die Prüfung auf Text Violations nutzt ein LLM.
- [ ] B) „Sanitize Text“ arbeitet ohne LLM, z. B. mit Mustern wie Regex.
- [ ] C) Guardrails werden einmal eingerichtet und müssen danach nicht mehr angepasst werden.
- [ ] D) Je restriktiver die Guardrails, desto besser ist die Nutzererfahrung.

---

## Frage 50 (1 Punkt)

Welcher Text wird vom regulären Ausdruck `\d{3}-\d{4}` gefunden? *(Eine Antwort richtig)*

- [ ] A) `abc-defg`
- [ ] B) `5551234`
- [ ] C) `555-1234`
- [ ] D) `55-12345`
