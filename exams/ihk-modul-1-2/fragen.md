# Prüfungsfragen – AI Automation Engineer mit n8n (Modul 1 & 2)

> **Lösungsversion – vertraulich.** Diese Datei enthält die richtigen Antworten und Begründungen.
> Den Prüfungsbogen ohne Lösungen und den Lösungsschlüssel erzeugt `npm run exam`.

## Aufbau und Bewertung

- 50 Fragen: Modul 1 (Fragen 1–26) und Modul 2 (Fragen 27–50), je 3–4 Antwortmöglichkeiten.
- `- [x]` markiert eine richtige Antwort, `- [ ]` eine falsche.
- Typ `single`: genau eine richtige Antwort, Hinweis *(Eine Antwort richtig)*, 1 Punkt.
- Typ `multi`: mindestens zwei richtige Antworten, Hinweis *(Mehrere Antworten möglich)*, 2 Punkte.
- Bewertung nach dem Prinzip „alles oder nichts“: Punkte gibt es nur, wenn genau die richtigen Antworten angekreuzt sind.
- `quelle` verweist auf die Foliennummern im jeweiligen Google-Slides-Deck.

# Teil A – Modul 1: Automation with AI Agents

## Frage 1 · Modul 1 · KI-Grundlagen
<!-- id: M1-01 | typ: single | punkte: 1 | quelle: Modul 1, Folie 13 -->

Welche Definition von künstlicher Intelligenz (KI) wurde in der Schulung verwendet? *(Eine Antwort richtig)*

- [ ] A) Programme, die ausschließlich fest programmierte Wenn-Dann-Regeln abarbeiten
- [x] B) Systeme oder Maschinen, die Aufgaben ausführen können, die normalerweise menschliche Intelligenz erfordern
- [ ] C) Datenbanken, die sehr große Mengen an Text speichern und durchsuchen
- [ ] D) Roboter, die ein eigenes Bewusstsein entwickelt haben

> **Begründung:** Die Schulung definiert KI als „Systems or machines that can perform tasks that normally require human intelligence“.

---

## Frage 2 · Modul 1 · Large Language Models
<!-- id: M1-02 | typ: multi | punkte: 2 | quelle: Modul 1, Folien 18–21 -->

Welche Aussagen zu Large Language Models (LLMs) wie ChatGPT, Claude oder Gemini sind korrekt? *(Mehrere Antworten möglich)*

- [x] A) Sie wurden mit sehr großen Textmengen trainiert, unter anderem aus dem Internet.
- [ ] B) Sie greifen bei jeder Antwort automatisch auf das aktuelle Internet zu.
- [x] C) Sie erzeugen Antworten, indem sie das jeweils nächste Wort vorhersagen.
- [ ] D) Man kann bei jeder Antwort genau nachvollziehen, warum das Modell ein bestimmtes Wort gewählt hat.

> **Begründung:** LLMs lernen aus Daten der Vergangenheit und sagen das nächste Wort voraus. Ohne Tools haben sie keinen Zugriff auf aktuelle Informationen. Laut Dario Amodei (Anthropic) ist im Detail nicht nachvollziehbar, warum ein Modell bestimmte Wörter wählt.

---

## Frage 3 · Modul 1 · Programmierung vs. No-Code
<!-- id: M1-03 | typ: multi | punkte: 2 | quelle: Modul 1, Folien 24–25 -->

In welchen Situationen ist laut Schulung ein No-Code-Tool wie n8n einer Eigenentwicklung vorzuziehen? *(Mehrere Antworten möglich)*

- [x] A) Ideen sollen schnell getestet werden.
- [x] B) Es steht kein eigenes Tech-Team zur Verfügung.
- [ ] C) Volle Kontrolle und vollständiges Eigentum am Code sind entscheidend.
- [ ] D) Die Lösung muss extrem stark skalieren und langfristig möglichst günstig betrieben werden.

> **Begründung:** Für No-Code sprechen Entwicklungsgeschwindigkeit, begrenztes Budget, fehlendes Tech-Team, Standard-Workflows und das Testen von Ideen. Kontrolle, Ownership, Skalierbarkeit und langfristige Einsparungen sprechen für eine Eigenentwicklung.

---

## Frage 4 · Modul 1 · n8n-Grundlagen
<!-- id: M1-04 | typ: multi | punkte: 2 | quelle: Modul 1, Folie 27 -->

Welche Aussagen zu n8n sind korrekt? *(Mehrere Antworten möglich)*

- [x] A) n8n ist ein Open-Source-Tool zur Workflow-Automatisierung.
- [ ] B) n8n kann ausschließlich als bezahlter Cloud-Dienst genutzt werden.
- [x] C) Mit n8n lassen sich wiederkehrende Aufgaben wie E-Mail-Versand oder Tabellen-Updates ohne komplexen Code automatisieren.
- [ ] D) Für jeden n8n-Workflow muss zusätzlich eigener Programmcode geschrieben werden.

> **Begründung:** n8n ist Open Source, kann selbst gehostet oder per Abo genutzt werden und automatisiert wiederkehrende Aufgaben ohne komplexen Code.

---

## Frage 5 · Modul 1 · Workflows
<!-- id: M1-05 | typ: single | punkte: 1 | quelle: Modul 1, Folien 28–31 -->

Aus welchen grundlegenden Bausteinen besteht ein n8n-Workflow? *(Eine Antwort richtig)*

- [ ] A) Aus Tabellen, Zeilen und Spalten
- [ ] B) Aus Prompts, Chunks und Embeddings
- [x] C) Aus einem Trigger Node und Action Nodes
- [ ] D) Aus Frontend, Backend und Datenbank

> **Begründung:** Ein Workflow wird durch einen Trigger Node gestartet und besteht danach aus Action Nodes (Trigger → Action → Result).

---

## Frage 6 · Modul 1 · Credentials
<!-- id: M1-06 | typ: multi | punkte: 2 | quelle: Modul 1, Folien 36–37 -->

Welche Aussagen zu Credentials in n8n sind korrekt? *(Mehrere Antworten möglich)*

- [x] A) Credentials in einem Projekt werden mit allen Projektmitgliedern geteilt.
- [ ] B) Private Zugangsdaten wie ein Gmail-Login sollten in Projekten abgelegt werden.
- [x] C) Credentials können API Keys, OAuth-Tokens oder Login/Passwort enthalten.
- [ ] D) Credentials sind immer an genau einen Workflow gebunden.

> **Begründung:** Projekt-Credentials sind geteilt, deshalb gehören private Logins nur in den persönlichen Bereich. Credentials sind nicht an einen einzelnen Workflow gebunden, sondern workflowübergreifend nutzbar.

---

## Frage 7 · Modul 1 · Action Nodes
<!-- id: M1-07 | typ: multi | punkte: 2 | quelle: Modul 1, Folie 41 -->

Wofür werden Action Nodes in n8n eingesetzt? *(Mehrere Antworten möglich)*

- [x] A) Um Daten innerhalb eines Workflows zu verändern
- [x] B) Um Operationen in externen Systemen auszuführen
- [ ] C) Um einen Workflow zu einem festgelegten Zeitpunkt zu starten
- [ ] D) Um Credentials zwischen Projekten zu verschieben

> **Begründung:** Action Nodes manipulieren Daten, führen Operationen in externen Systemen aus und lösen dort Ereignisse aus. Das zeitgesteuerte Starten übernimmt ein Trigger Node (Schedule Trigger).

---

## Frage 8 · Modul 1 · Trigger Nodes
<!-- id: M1-08 | typ: single | punkte: 1 | quelle: Modul 1, Folien 52–55 -->

Ein Unternehmen möchte jeden Morgen automatisch einen Bericht per E-Mail verschicken. Welcher Trigger ist dafür am besten geeignet? *(Eine Antwort richtig)*

- [ ] A) Manual Trigger
- [ ] B) Webhook Trigger
- [ ] C) Chat Trigger
- [x] D) Schedule Trigger

> **Begründung:** Der Schedule Trigger startet Workflows automatisch zu festgelegten Zeiten oder Intervallen, z. B. für tägliche Berichte.

---

## Frage 9 · Modul 1 · Trigger Nodes
<!-- id: M1-09 | typ: single | punkte: 1 | quelle: Modul 1, Folie 55 -->

Ein Schedule Trigger ist mit der Cron-Expression `0 9 * * *` konfiguriert. Wann startet der Workflow? *(Eine Antwort richtig)*

- [ ] A) Alle 9 Minuten
- [x] B) Täglich um 9:00 Uhr
- [ ] C) Am 9. Tag jedes Monats um 0:00 Uhr
- [ ] D) Jeden Montag um 9:00 Uhr

> **Begründung:** Die Felder stehen für Minute, Stunde, Tag, Monat und Wochentag. `0 9 * * *` bedeutet Minute 0, Stunde 9, an jedem Tag.

---

## Frage 10 · Modul 1 · Trigger Nodes
<!-- id: M1-10 | typ: multi | punkte: 2 | quelle: Modul 1, Folien 48–50 -->

Welche Aussagen zum Webhook Trigger sind korrekt? *(Mehrere Antworten möglich)*

- [x] A) Er wartet auf eingehende HTTP-Requests und startet dann den Workflow.
- [x] B) Die generierte Webhook-URL wird an externe Dienste weitergegeben.
- [ ] C) Er fragt in festen Zeitabständen selbstständig externe Dienste nach neuen Daten ab.
- [x] D) Die HTTP-Methode, z. B. GET oder POST, ist konfigurierbar.

> **Begründung:** Der Webhook Trigger reagiert passiv auf eingehende Requests an seine URL. Er fragt externe Dienste nicht selbstständig ab.

---

## Frage 11 · Modul 1 · Trigger Nodes
<!-- id: M1-11 | typ: single | punkte: 1 | quelle: Modul 1, Folien 44–46 -->

Wofür wird der Manual Trigger typischerweise verwendet? *(Eine Antwort richtig)*

- [x] A) Zum Testen von Workflows während der Entwicklung oder für einmalige, von Menschen angestoßene Abläufe
- [ ] B) Für nächtliche, automatisch laufende Backups ohne menschliches Zutun
- [ ] C) Für den Empfang von Zahlungsbestätigungen externer Dienste in Echtzeit

> **Begründung:** Der Manual Trigger startet einen Workflow per Klick auf „Execute Workflow“. Backups gehören zum Schedule Trigger, Echtzeit-Benachrichtigungen zum Webhook Trigger.

---

## Frage 12 · Modul 1 · AI Agent Node
<!-- id: M1-12 | typ: multi | punkte: 2 | quelle: Modul 1, Folien 61–63 -->

Was unterscheidet den AI Agent Node von einem einfachen Prompt-Response-Aufruf eines Sprachmodells? *(Mehrere Antworten möglich)*

- [x] A) Er kann Probleme in mehrere Teilschritte zerlegen.
- [ ] B) Er garantiert fehlerfreie Antworten ohne Halluzinationen.
- [x] C) Er kann selbstständig entscheiden, welche angebundenen Tools er nutzt.
- [ ] D) Er funktioniert auch ohne angebundenes Sprachmodell.

> **Begründung:** Ein AI Agent kann Probleme zerlegen, Tools nutzen und mehrstufige Aufgaben bearbeiten. Er benötigt aber ein angebundenes Sprachmodell und kann weiterhin Fehler machen.

---

## Frage 13 · Modul 1 · Chat Trigger
<!-- id: M1-13 | typ: single | punkte: 1 | quelle: Modul 1, Folien 57–59 -->

Sie haben einen AI Agent mit einem Chat Trigger gebaut. Wie testen Sie ihn am einfachsten direkt im n8n-Editor? *(Eine Antwort richtig)*

- [ ] A) Indem Sie die Webhook-URL im Browser aufrufen
- [ ] B) Indem Sie zusätzlich einen Schedule Trigger ergänzen
- [x] C) Über das Chat-Fenster unten im Canvas, in dem Sie Nachrichten simulieren können
- [ ] D) Gar nicht, Chat Trigger funktionieren nur in Slack oder Microsoft Teams

> **Begründung:** Mit dem Chat Trigger erscheint unten im Canvas ein Chat-Widget, in dem man Nachrichten an den Agenten simulieren kann.

---

## Frage 14 · Modul 1 · Prompt Engineering
<!-- id: M1-14 | typ: single | punkte: 1 | quelle: Modul 1, Folien 67–69 -->

Welche drei Grundbausteine eines guten Prompts wurden in der Schulung vorgestellt? *(Eine Antwort richtig)*

- [ ] A) Trigger, Action, Result
- [ ] B) Begrüßung, Fragestellung, Verabschiedung
- [ ] C) Input, mathematisches Modell, Output
- [x] D) Rollendefinition, Kontext, Aufgabenstellung

> **Begründung:** Die Prompt-Engineering-Basics sind Role Definition, Context Setting und Task Instruction. „Trigger, Action, Result“ beschreibt den Ablauf eines Workflows, „Input, Modell, Output“ die Funktionsweise von KI.

---

## Frage 15 · Modul 1 · Prompt Engineering
<!-- id: M1-15 | typ: single | punkte: 1 | quelle: Modul 1, Folien 68–71 -->

In einem System Prompt steht `Company: {{ $json.company_name }}`. Was bewirkt der Ausdruck in den doppelten geschweiften Klammern? *(Eine Antwort richtig)*

- [x] A) Er fügt den Wert des Feldes `company_name` aus den eingehenden Daten dynamisch in den Prompt ein.
- [ ] B) Er fordert das Sprachmodell auf, einen passenden Firmennamen zu erfinden.
- [ ] C) Er ist ein Kommentar und wird vom Sprachmodell ignoriert.
- [ ] D) Er speichert den Firmennamen dauerhaft in einer Datenbank.

> **Begründung:** `{{ … }}` ist eine n8n-Expression. `$json` greift auf die Daten des eingehenden Items zu, sodass der Prompt mit echten Werten befüllt wird.

---

## Frage 16 · Modul 1 · Prompt Engineering
<!-- id: M1-16 | typ: multi | punkte: 2 | quelle: Modul 1, Folie 71 -->

Im Beispiel-Prompt zur Lead-Qualifizierung wird ein exaktes Ausgabeformat vorgegeben, z. B. „LEAD SCORE: [Number 1-100]“. Welche Vorteile hat das? *(Mehrere Antworten möglich)*

- [x] A) Die Antworten sind über viele Ausführungen hinweg einheitlich aufgebaut.
- [x] B) Die Ergebnisse lassen sich in nachfolgenden Nodes leichter weiterverarbeiten, z. B. für ein CRM.
- [ ] C) Das Sprachmodell wird dadurch dauerhaft mit den Lead-Daten neu trainiert.

> **Begründung:** Ein festes Ausgabeformat sorgt für konsistente, maschinell weiterverarbeitbare Antworten. Ein Prompt verändert das Modell selbst nicht.

---

## Frage 17 · Modul 1 · Agent Memory
<!-- id: M1-17 | typ: multi | punkte: 2 | quelle: Modul 1, Folien 73–74 -->

Welche Vorteile bietet ein Memory, das an einen AI Agent angebunden ist? *(Mehrere Antworten möglich)*

- [x] A) Der Gesprächsverlauf bleibt über mehrere Nachrichten hinweg erhalten.
- [x] B) Der Agent kann sich Vorlieben und Angaben des Nutzers merken.
- [ ] C) Der Agent benötigt kein Sprachmodell mehr.
- [ ] D) Der Agent erhält automatisch Zugriff auf aktuelle Informationen aus dem Internet.

> **Begründung:** Memory sorgt für Gesprächskontinuität, merkt sich Nutzerdaten und ermöglicht mehrstufige Gespräche. Für aktuelle Informationen braucht der Agent Tools wie Perplexity.

---

## Frage 18 · Modul 1 · Agent Memory
<!-- id: M1-18 | typ: single | punkte: 1 | quelle: Modul 1, Folie 75 -->

Was legen Sie beim Simple Memory mit der Einstellung „Context Window Length“ fest? *(Eine Antwort richtig)*

- [ ] A) Die maximale Länge einer einzelnen Antwort des Sprachmodells
- [x] B) Wie viele vorherige Interaktionen dem Sprachmodell als Kontext mitgegeben werden
- [ ] C) Wie lange ein Workflow maximal laufen darf
- [ ] D) Wie viele Tools der Agent gleichzeitig nutzen darf

> **Begründung:** Die Context Window Length (Interaction Window Size) bestimmt, wie viele vergangene Interaktionen im Kontext an das Modell übergeben werden.

---

## Frage 19 · Modul 1 · HTTP Request Node
<!-- id: M1-19 | typ: single | punkte: 1 | quelle: Modul 1, Folien 81, 127–128 -->

Sie möchten einen Dienst anbinden, für den es in n8n keine eigene Integration gibt, der aber eine REST-API anbietet. Welcher Node ist dafür vorgesehen? *(Eine Antwort richtig)*

- [ ] A) Schedule Trigger
- [ ] B) Simple Memory
- [x] C) HTTP Request Node
- [ ] D) Default Data Loader

> **Begründung:** Der HTTP Request Node verbindet n8n mit jeder REST-API, auch ohne dedizierte Integration, und unterstützt alle gängigen HTTP-Methoden und Authentifizierungsarten.

---

## Frage 20 · Modul 1 · Perplexity
<!-- id: M1-20 | typ: multi | punkte: 2 | quelle: Modul 1, Folien 123–125 -->

Welche Aussagen zur Perplexity-Integration als Tool eines AI Agents sind korrekt? *(Mehrere Antworten möglich)*

- [x] A) Der Agent erhält Zugriff auf aktuelle Informationen, die über seine Trainingsdaten hinausgehen.
- [x] B) Die Antworten enthalten Quellenangaben, was Halluzinationen reduziert.
- [x] C) Die Suchanfrage kann mit `$fromAI()` dynamisch vom Agenten befüllt werden.
- [ ] D) Für die Nutzung ist kein API-Key erforderlich.

> **Begründung:** Perplexity liefert aktuelle, mit Quellen belegte Antworten. Die Query wird per `$fromAI()` oder ✨ dynamisch übergeben. Für die Nutzung braucht man einen API-Key von perplexity.ai.

---

## Frage 21 · Modul 1 · JSON
<!-- id: M1-21 | typ: single | punkte: 1 | quelle: Modul 1, Folien 135–136 -->

Welcher der folgenden Ausdrücke ist gültiges JSON? *(Eine Antwort richtig)*

- [ ] A) `{ name: "Hans", age: 23 }`
- [x] B) `{ "name": "Hans", "age": 23, "happy": true }`
- [ ] C) `{ 'name': 'Hans', 'age': 23 }`
- [ ] D) `{ "name": "Hans", "age": 23, }`

> **Begründung:** In JSON müssen Schlüssel in doppelten Anführungszeichen stehen, einfache Anführungszeichen sind nicht erlaubt und ein abschließendes Komma ist ungültig.

---

## Frage 22 · Modul 1 · Error Handling
<!-- id: M1-22 | typ: multi | punkte: 2 | quelle: Modul 1, Folien 87–89 -->

Welche Bestandteile gehören zum Error Handling in n8n? *(Mehrere Antworten möglich)*

- [x] A) Ein eigener Error-Workflow mit einem Error Trigger
- [x] B) Das Hinterlegen des Error-Workflows in den Workflow-Einstellungen
- [ ] C) Ein Chat Trigger, der Fehlermeldungen automatisch beantwortet
- [x] D) Der Stop And Error Node, um einen Fehler gezielt auszulösen

> **Begründung:** Error Handling in n8n besteht aus einem Error-Trigger-Workflow, der in den Workflow Settings hinterlegt wird, dem Zugriff auf die Fehlerdaten der Ausführung und dem Stop And Error Node.

---

## Frage 23 · Modul 1 · Error Handling
<!-- id: M1-23 | typ: single | punkte: 1 | quelle: Modul 1, Folie 90 -->

Ein Tool eines AI Agents schlägt fehl, der Workflow läuft aber trotzdem „erfolgreich“ durch. Wie wurde in der Schulung empfohlen, solche Tool-Fehler abzufangen? *(Eine Antwort richtig)*

- [ ] A) Fehlermeldungen von Tools im System Prompt verbieten, damit der Workflow nicht abbricht
- [ ] B) Das Sprachmodell gegen ein größeres Modell austauschen, das keine Tool-Fehler macht
- [ ] C) Die Context Window Length erhöhen, damit der Agent sich an frühere Fehler erinnert
- [x] D) Den Agenten bei Fehlern „error“ ausgeben lassen, dies per If Node prüfen und mit Stop And Error abbrechen

> **Begründung:** Der Agent wird angewiesen, „error“ in seiner Antwort zu erwähnen. Ein If Node erkennt das, und Stop And Error löst den Error-Workflow aus.

---

## Frage 24 · Modul 1 · RAG
<!-- id: M1-24 | typ: multi | punkte: 2 | quelle: Modul 1, Folien 97–98 -->

Aus welchen Gründen setzt man Retrieval-Augmented Generation (RAG) ein? *(Mehrere Antworten möglich)*

- [x] A) Um auf Informationen zuzugreifen, die über die Trainingsdaten des Modells hinausgehen
- [x] B) Um unternehmenseigenes Wissen nutzbar zu machen
- [ ] C) Um das Sprachmodell dauerhaft mit neuen Daten nachzutrainieren
- [x] D) Um Halluzinationen zu reduzieren und Antworten auf Fakten zu stützen

> **Begründung:** RAG verbindet ein Modell mit externen Datenquellen zur Laufzeit. Das Modell selbst wird dabei nicht neu trainiert.

---

## Frage 25 · Modul 1 · RAG
<!-- id: M1-25 | typ: single | punkte: 1 | quelle: Modul 1, Folie 99 -->

In welcher Reihenfolge laufen die Schritte eines RAG-Systems ab? *(Eine Antwort richtig)*

- [ ] A) Embeddings erzeugen → Dokument hochladen → in Chunks aufteilen → semantisch suchen
- [ ] B) Semantisch suchen → Dokument hochladen → Embeddings erzeugen → in Chunks aufteilen
- [x] C) Dokument hochladen → in Chunks aufteilen → Embeddings erzeugen → semantisch suchen
- [ ] D) In Chunks aufteilen → semantisch suchen → Dokument hochladen → Embeddings erzeugen

> **Begründung:** Dokumente werden in den Vector Store geladen, in Chunks zerlegt, in Embeddings umgewandelt und anschließend per semantischer Suche abgefragt.

---

## Frage 26 · Modul 1 · Vector Store
<!-- id: M1-26 | typ: single | punkte: 1 | quelle: Modul 1, Folien 100, 117–119 -->

Was sind Embeddings im Kontext eines Vector Stores? *(Eine Antwort richtig)*

- [x] A) Zahlenvektoren, die die Bedeutung eines Textes abbilden, sodass ähnliche Inhalte nahe beieinanderliegen
- [ ] B) Verschlüsselte Passwörter für den Zugriff auf die Datenbank
- [ ] C) Komprimierte Kopien der hochgeladenen PDF-Dateien
- [ ] D) Manuell gepflegte Schlagwortlisten zu jedem Dokument

> **Begründung:** Ein Embedding-Modell (z. B. `text-embedding-3-small`) wandelt Text in Vektoren um. Ähnliche Bedeutungen ergeben ähnliche Vektoren, was die semantische Suche ermöglicht.

---

# Teil B – Modul 2: Multi-Agent-Systeme & MCPs

## Frage 27 · Modul 2 · Persistent Memory
<!-- id: M2-01 | typ: multi | punkte: 2 | quelle: Modul 2, Folien 21–23 -->

Warum setzt man für einen AI Agent ein persistentes Memory statt des Simple Memory ein? *(Mehrere Antworten möglich)*

- [x] A) Der Inhalt des Simple Memory geht nach einem Neustart oder Update von n8n verloren.
- [x] B) Gespräche werden gespeichert und sind dadurch nachvollziehbar (auditierbar).
- [x] C) Man kann ein Gespräch zu einem späteren Zeitpunkt fortsetzen.
- [ ] D) Persistentes Memory erlaubt ein unbegrenzt großes Kontextfenster ohne zusätzliche Kosten.

> **Begründung:** Persistentes Memory überdauert Sessions und Neustarts, macht Gespräche auditierbar und fortsetzbar. Die Kosten pro Anfrage hängen weiterhin von der Größe des übergebenen Kontexts ab.

---

## Frage 28 · Modul 2 · Persistent Memory
<!-- id: M2-02 | typ: single | punkte: 1 | quelle: Modul 2, Folie 23 -->

Warum ist es keine gute Lösung, statt eines persistenten Memorys einfach die Context Window Length stark zu erhöhen? *(Eine Antwort richtig)*

- [ ] A) n8n erlaubt höchstens fünf gespeicherte Nachrichten pro Gespräch.
- [x] B) Die Kosten steigen schnell, und der Verlauf ist trotzdem nicht dauerhaft gespeichert.
- [ ] C) Der Agent verliert dadurch den Zugriff auf seine Tools.

> **Begründung:** Ein größeres Kontextfenster bedeutet mehr Tokens pro Anfrage und damit höhere Kosten. Beim Simple Memory existiert der Verlauf zudem nur im Arbeitsspeicher.

---

## Frage 29 · Modul 2 · Relationale Datenbanken
<!-- id: M2-03 | typ: single | punkte: 1 | quelle: Modul 2, Folien 25–26 -->

Was beschreibt eine relationale Datenbank am besten? *(Eine Antwort richtig)*

- [ ] A) Ein Speicher, der Texte ausschließlich als Zahlenvektoren für die semantische Suche ablegt
- [ ] B) Eine Ordnerstruktur, in der Dateien wie PDFs abgelegt werden
- [ ] C) Ein flüchtiger Zwischenspeicher, der nur während einer Workflow-Ausführung existiert
- [x] D) Ein System, das Daten in Tabellen mit Zeilen und Spalten organisiert, die über gemeinsame Felder verknüpft sind

> **Begründung:** Relationale Datenbanken organisieren Daten in Tabellen (Relationen) mit Zeilen und Spalten. Tabellen werden über gemeinsame Felder miteinander verknüpft. Antwort A beschreibt einen Vector Store.

---

## Frage 30 · Modul 2 · Persistent Memory mit Neon
<!-- id: M2-04 | typ: multi | punkte: 2 | quelle: Modul 2, Folien 29–33 -->

Welche Aussagen zur Anbindung eines Postgres Chat Memory mit Neon sind korrekt? *(Mehrere Antworten möglich)*

- [x] A) Neon stellt PostgreSQL als Cloud-Dienst bereit.
- [ ] B) Die Tabelle für den Chatverlauf muss vorher manuell per SQL angelegt werden.
- [x] C) Die Verbindungsdaten werden in Neon über „Parameters only“ kopiert und als Credential in n8n eingetragen.
- [ ] D) Neon ist eine Vector-Datenbank und ersetzt Pinecone.

> **Begründung:** Neon ist ein Cloud-Dienst für Postgres. Die Verbindungsparameter werden in die n8n-Credentials übernommen, die Tabelle für den Chatverlauf legt n8n automatisch an.

---

## Frage 31 · Modul 2 · Multi-Agent-Systeme
<!-- id: M2-05 | typ: multi | punkte: 2 | quelle: Modul 2, Folie 37 -->

Welche Merkmale beschreiben ein Multi-Agent-System? *(Mehrere Antworten möglich)*

- [x] A) Es arbeitet mit mehreren Agenten statt mit einem einzigen LLM.
- [x] B) Jeder Agent hat eine eigene, über seinen Prompt definierte Rolle.
- [ ] C) Ein einzelner Agent erhält möglichst alle verfügbaren Tools.
- [x] D) Die Agenten kommunizieren miteinander und übergeben sich Ergebnisse.

> **Begründung:** Ein Multi-Agent-System nutzt mehrere Agenten mit eigenen Rollen, die miteinander kommunizieren. Ein einzelner Agent mit allen Tools ist ein monolithischer Agent.

---

## Frage 32 · Modul 2 · Multi-Agent-Systeme
<!-- id: M2-06 | typ: multi | punkte: 2 | quelle: Modul 2, Folie 38 -->

Welche Gründe sprechen laut Schulung für ein Multi-Agent-System? *(Mehrere Antworten möglich)*

- [x] A) Spezialisierte Agenten liefern bessere Ergebnisse als ein einzelner Generalist.
- [ ] B) Monolithische Agenten skalieren besonders gut.
- [x] C) Für jede Teilaufgabe kann das jeweils passendste LLM gewählt werden.
- [ ] D) Die Betriebskosten sind immer niedriger als bei einem einzelnen Agenten.

> **Begründung:** „Specialization beats generalization“ und „Per task use the most appropriate LLM“. Monolithische Agenten skalieren schlecht, und Multi-Agent-Systeme verursachen eher höhere Kosten.

---

## Frage 33 · Modul 2 · Multi-Agent-Systeme
<!-- id: M2-07 | typ: single | punkte: 1 | quelle: Modul 2, Folie 39 -->

Welche Nachteile von Multi-Agent-Systemen wurden in der Schulung genannt? *(Eine Antwort richtig)*

- [x] A) Höhere Kosten und längere Latenz
- [ ] B) Schlechtere Ergebnisqualität und weniger Spezialisierung
- [ ] C) Keine Möglichkeit, Tools zu verwenden

> **Begründung:** Mehrere LLM-Aufrufe hintereinander oder nebeneinander erhöhen Kosten und Antwortzeit.

---

## Frage 34 · Modul 2 · Multi-Agent-Patterns
<!-- id: M2-08 | typ: single | punkte: 1 | quelle: Modul 2, Folien 41–45 -->

Ein Proof-Reader-Agent prüft den Text eines Writer-Agents und schickt ihn so lange zurück, bis ein Qualitätskriterium erfüllt ist. Welches Pattern liegt vor? *(Eine Antwort richtig)*

- [ ] A) Parallel
- [ ] B) Sequential
- [x] C) Loop
- [ ] D) Router

> **Begründung:** Beim Loop-Pattern wird die Ausgabe wiederholt bewertet, bis eine Qualitätsschwelle erreicht ist. Typische Einsatzfälle sind Proofreading und Report Writing.

---

## Frage 35 · Modul 2 · Multi-Agent-Patterns
<!-- id: M2-09 | typ: single | punkte: 1 | quelle: Modul 2, Folie 44 -->

Ein Kundensupport-System soll Anfragen je nach Inhalt an einen Agenten für technische Probleme, einen für Zahlungsfragen oder einen für Versandfragen weiterleiten. Welches Pattern passt? *(Eine Antwort richtig)*

- [ ] A) Parallel
- [ ] B) Sequential
- [ ] C) Loop
- [x] D) Router

> **Begründung:** Beim Router-Pattern klassifiziert ein Controller-Agent die Anfrage und leitet sie an den passenden Spezialisten weiter.

---

## Frage 36 · Modul 2 · Multi-Agent-Patterns
<!-- id: M2-10 | typ: single | punkte: 1 | quelle: Modul 2, Folie 41 -->

Ein Artikel soll gleichzeitig von einem Agenten inhaltlich und von einem anderen auf Rechtschreibung geprüft werden. Die Ergebnisse werden anschließend zusammengeführt. Welches Pattern liegt vor? *(Eine Antwort richtig)*

- [x] A) Parallel
- [ ] B) Sequential
- [ ] C) Router
- [ ] D) Network

> **Begründung:** Beim Parallel-Pattern bearbeiten mehrere Agenten unabhängige Teilaufgaben gleichzeitig, die Ergebnisse werden zusammengeführt.

---

## Frage 37 · Modul 2 · Multi-Agent-Patterns
<!-- id: M2-11 | typ: single | punkte: 1 | quelle: Modul 2, Folie 42 -->

Ein Agent generiert Code, ein zweiter reviewt ihn, ein dritter übernimmt das Deployment. Jeder Schritt baut auf dem Ergebnis des vorherigen auf. Welches Pattern ist das? *(Eine Antwort richtig)*

- [ ] A) Parallel
- [x] B) Sequential
- [ ] C) Network
- [ ] D) Router

> **Begründung:** Beim Sequential-Pattern laufen Agenten in fester Reihenfolge mit klarer Übergabe. „Code generation → review → deploy“ ist ein Beispiel aus der Schulung.

---

## Frage 38 · Modul 2 · Multi-Agent-Patterns
<!-- id: M2-12 | typ: single | punkte: 1 | quelle: Modul 2, Folie 45 -->

Ein Ärzteteam aus Diagnostiker, Chirurg und Pharmakologe soll komplexe Fälle gemeinsam besprechen. Es gibt keinen zentralen Koordinator, die Agenten kommunizieren frei miteinander. Welches Pattern passt? *(Eine Antwort richtig)*

- [ ] A) Sequential
- [ ] B) Router
- [x] C) Network
- [ ] D) Loop

> **Begründung:** Beim Network-Pattern gibt es keinen zentralen Controller. Die Agenten kommunizieren frei, das Verhalten entsteht dynamisch.

---

## Frage 39 · Modul 2 · Multi-Agent-Patterns
<!-- id: M2-13 | typ: multi | punkte: 2 | quelle: Modul 2, Folien 41–45 -->

Welche Aussagen zu den Multi-Agent-Patterns sind korrekt? *(Mehrere Antworten möglich)*

- [x] A) Beim Router-Pattern werden nur die für die Anfrage relevanten Agenten aktiviert.
- [ ] B) Beim Sequential-Pattern arbeiten alle Agenten gleichzeitig und unabhängig voneinander.
- [x] C) Das Loop-Pattern eignet sich, wenn die Ausgabequalität wichtiger ist als die Geschwindigkeit.
- [ ] D) Beim Network-Pattern gibt es immer einen zentralen Controller-Agenten.

> **Begründung:** B beschreibt das Parallel-Pattern. Das Network-Pattern zeichnet sich gerade durch das Fehlen eines zentralen Controllers aus.

---

## Frage 40 · Modul 2 · Multi-Agent-Systeme in n8n
<!-- id: M2-14 | typ: multi | punkte: 2 | quelle: Modul 2, Folie 47 -->

Mit welchen Mitteln lassen sich Multi-Agent-Systeme in n8n umsetzen? *(Mehrere Antworten möglich)*

- [x] A) Mit dem AI Agent Tool, also einem Agenten, der als Tool an einen anderen Agenten angebunden ist
- [x] B) Mit dem Sub-Workflow Tool, das einen separaten Workflow mit eigenem Agenten aufruft
- [x] C) Mit mehreren Agenten, die in einem Workflow hintereinander oder parallel geschaltet sind
- [ ] D) Nur über externe Python-Skripte, da n8n lediglich einen Agenten pro Workflow erlaubt

> **Begründung:** n8n bietet Workflows mit mehreren Agenten (für Parallel und Sequential), das AI Agent Tool und das Sub-Workflow Tool.

---

## Frage 41 · Modul 2 · Multi-Agent-Systeme in n8n
<!-- id: M2-15 | typ: single | punkte: 1 | quelle: Modul 2, Folie 47 -->

Wann ist das Sub-Workflow Tool dem AI Agent Tool vorzuziehen? *(Eine Antwort richtig)*

- [ ] A) Wenn ein möglichst einfaches Setup für ein kleines System gewünscht ist
- [x] B) Wenn der Teil-Agent komplexe eigene Abläufe hat und getrennt getestet und debuggt werden soll
- [ ] C) Wenn der Teil-Agent kein Sprachmodell benötigt
- [ ] D) Wenn alle Agenten zwingend im selben Canvas sichtbar sein müssen

> **Begründung:** Das AI Agent Tool ist einfacher und für kleine Systeme geeignet. Das Sub-Workflow Tool ist komplexer, eignet sich aber für aufwendige Abläufe und ist leichter zu debuggen, weil alles getrennt ist.

---

## Frage 42 · Modul 2 · Multi-Agent-Systeme in n8n
<!-- id: M2-16 | typ: single | punkte: 1 | quelle: Modul 2, Folien 50–52 -->

Mit welchem Trigger beginnt ein Sub-Workflow, der von einem anderen Workflow als Tool aufgerufen wird? *(Eine Antwort richtig)*

- [x] A) „When Executed by Another Workflow“ (Execute Workflow Trigger)
- [ ] B) Schedule Trigger
- [ ] C) Chat Trigger

> **Begründung:** Ein Sub-Workflow wird über den Execute Workflow Trigger gestartet und erhält dabei die Eingaben des aufrufenden Workflows.

---

## Frage 43 · Modul 2 · MCP
<!-- id: M2-17 | typ: multi | punkte: 2 | quelle: Modul 2, Folie 63 -->

Welche Aussagen zum Model Context Protocol (MCP) sind korrekt? *(Mehrere Antworten möglich)*

- [x] A) MCP ist ein standardisiertes Protokoll, um KI-Modelle mit Tools, Daten und Diensten zu verbinden.
- [ ] B) MCP ist ein eigenes Sprachmodell, das Tools überflüssig macht.
- [x] C) Ein MCP-Server stellt seine Fähigkeiten über klar definierte Schemas bereit, die jeder kompatible KI-Client versteht.
- [ ] D) MCP funktioniert nur mit Agenten, die in n8n gebaut wurden.

> **Begründung:** MCP ist ein Protokoll, kein Modell. Weil es standardisiert ist, kann jede KI mit Zugriff auf den MCP-Server dessen Tools nutzen, unabhängig davon, womit sie gebaut wurde.

---

## Frage 44 · Modul 2 · MCP
<!-- id: M2-18 | typ: single | punkte: 1 | quelle: Modul 2, Folie 64 -->

Welchen Vorteil bietet ein MCP-Server gegenüber individuell angebundenen APIs? *(Eine Antwort richtig)*

- [ ] A) Er macht eine Authentifizierung grundsätzlich überflüssig.
- [ ] B) Er beschleunigt die Antwortzeit des Sprachmodells.
- [x] C) Er bietet eine einheitliche, selbsterklärende Schnittstelle, die mehrere Clients leicht nutzen können.
- [ ] D) Er speichert Gesprächsverläufe dauerhaft in einer Datenbank.

> **Begründung:** Individuelle APIs sind „custom, fragile, hard to scale over multiple clients“. MCP bietet eine einheitliche, selbsterklärende Schnittstelle.

---

## Frage 45 · Modul 2 · MCP in n8n
<!-- id: M2-19 | typ: multi | punkte: 2 | quelle: Modul 2, Folien 65–67 -->

Welche Aussagen zu MCP in n8n sind korrekt? *(Mehrere Antworten möglich)*

- [x] A) Mit dem MCP Server Trigger stellt man Tools aus n8n als MCP-Server bereit.
- [ ] B) Ein MCP-Server in n8n benötigt zusätzlich immer einen Schedule Trigger.
- [x] C) Mit dem MCP Client Tool kann ein AI Agent die Tools eines MCP-Servers nutzen.

> **Begründung:** Der MCP Server Trigger macht angebundene Tools als MCP-Server verfügbar. Das MCP Client Tool verbindet einen AI Agent mit einem MCP-Server. Ein Schedule Trigger ist dafür nicht nötig.

---

## Frage 46 · Modul 2 · MCP
<!-- id: M2-20 | typ: single | punkte: 1 | quelle: Modul 2, Folien 63–67 -->

Ihr Newsletter-Versand soll so bereitgestellt werden, dass auch andere KI-Clients wie Claude Desktop Abonnenten abrufen und einzelne E-Mails versenden können. Was bauen Sie? *(Eine Antwort richtig)*

- [ ] A) Einen Workflow mit Schedule Trigger, der täglich alle E-Mails verschickt
- [ ] B) Ein Simple Memory, in dem die Abonnenten gespeichert werden
- [ ] C) Einen Vector Store mit allen bisherigen Newslettern
- [x] D) Einen MCP-Server mit Tools zum Abrufen der Abonnenten und zum Versenden einzelner E-Mails

> **Begründung:** Ein MCP-Server stellt die Tools standardisiert bereit, sodass jeder MCP-fähige Client sie nutzen kann.

---

## Frage 47 · Modul 2 · Guardrails
<!-- id: M2-21 | typ: multi | punkte: 2 | quelle: Modul 2, Folien 69–70 -->

Welche Risiken sollen Guardrails verringern? *(Mehrere Antworten möglich)*

- [x] A) Die Erzeugung schädlicher oder toxischer Inhalte
- [x] B) Datenlecks und Verletzungen der Privatsphäre
- [ ] C) Lange Ladezeiten des n8n-Editors
- [x] D) Missbrauch, z. B. für Phishing oder Betrug

> **Begründung:** Guardrails schützen u. a. vor schädlichen Inhalten, Datenlecks, Halluzinationen, Bias, Missbrauch und Compliance-Verstößen. Die Performance des Editors betreffen sie nicht.

---

## Frage 48 · Modul 2 · Guardrails
<!-- id: M2-22 | typ: single | punkte: 1 | quelle: Modul 2, Folie 71 -->

Wie heißt ein Guardrail, der die Antworten des Modells prüft, bevor sie an den Nutzer ausgeliefert werden? *(Eine Antwort richtig)*

- [ ] A) Input Guardrail
- [x] B) Output Guardrail
- [ ] C) Retrieval Guardrail

> **Begründung:** Input Guardrails prüfen Nutzer-Prompts, Output Guardrails die Modellantworten, Retrieval Guardrails steuern, auf welche Informationen das Modell zugreifen darf.

---

## Frage 49 · Modul 2 · Guardrails in n8n
<!-- id: M2-23 | typ: multi | punkte: 2 | quelle: Modul 2, Folien 72–77 -->

Welche Aussagen zu Guardrails in n8n sind korrekt? *(Mehrere Antworten möglich)*

- [x] A) Die Prüfung auf Text Violations nutzt ein LLM.
- [x] B) „Sanitize Text“ arbeitet ohne LLM, z. B. mit Mustern wie Regex.
- [ ] C) Guardrails werden einmal eingerichtet und müssen danach nicht mehr angepasst werden.
- [ ] D) Je restriktiver die Guardrails, desto besser ist die Nutzererfahrung.

> **Begründung:** n8n bietet Guardrails mit LLM (Text Violations) und ohne LLM (Sanitize Text). Guardrails müssen laufend überwacht werden, und zu restriktive Guardrails führen zu False Positives und schlechter Nutzererfahrung.

---

## Frage 50 · Modul 2 · Regex
<!-- id: M2-24 | typ: single | punkte: 1 | quelle: Modul 2, Folie 78 -->

Welcher Text wird vom regulären Ausdruck `\d{3}-\d{4}` gefunden? *(Eine Antwort richtig)*

- [ ] A) `abc-defg`
- [ ] B) `5551234`
- [x] C) `555-1234`
- [ ] D) `55-12345`

> **Begründung:** `\d{3}` steht für genau drei Ziffern, danach folgt ein Bindestrich und `\d{4}` für genau vier Ziffern.
