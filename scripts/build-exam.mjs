#!/usr/bin/env node
// Builds the participant exam sheet and the answer key from a solution file (fragen.md).
// Usage: node scripts/build-exam.mjs [path/to/fragen.md]

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';

const sourcePath = process.argv[2] ?? 'exams/ihk-modul-1-2/fragen.md';
const outDir = dirname(sourcePath);
const lines = readFileSync(sourcePath, 'utf8').split('\n');

const HINTS = {
  single: '*(Eine Antwort richtig)*',
  multi: '*(Mehrere Antworten möglich)*',
};
const QUESTION_HEADING = /^## Frage (\d+) · (.+)$/;
const META = /^<!--\s*(.+?)\s*-->$/;
const OPTION = /^- \[( |x)\] ([A-Z])\) /;

const title = lines.find((line) => line.startsWith('# '))?.slice(2) ?? 'Prüfung';
const firstPartIndex = lines.findIndex((line) => /^# Teil /.test(line));
const body = lines.slice(firstPartIndex);

const questions = [];
const errors = [];
let current = null;

for (const line of body) {
  const heading = line.match(QUESTION_HEADING);
  if (heading) {
    current = { number: Number(heading[1]), heading: heading[2], meta: {}, options: [], text: '' };
    questions.push(current);
    continue;
  }
  if (!current) continue;

  const meta = line.match(META);
  if (meta) {
    for (const pair of meta[1].split('|')) {
      const [key, ...value] = pair.split(':');
      current.meta[key.trim()] = value.join(':').trim();
    }
    continue;
  }

  const option = line.match(OPTION);
  if (option) {
    current.options.push({ letter: option[2], correct: option[1] === 'x' });
  } else if (line.includes('*(')) {
    current.text = line;
  }
}

const ids = new Set();
questions.forEach((q, index) => {
  const label = `Frage ${q.number}`;
  const { id, typ, punkte } = q.meta;
  const correctCount = q.options.filter((o) => o.correct).length;
  const letters = q.options.map((o) => o.letter).join('');

  if (q.number !== index + 1) errors.push(`${label}: erwartet Nummer ${index + 1}`);
  if (!id) errors.push(`${label}: id fehlt`);
  if (ids.has(id)) errors.push(`${label}: id ${id} doppelt`);
  ids.add(id);
  if (!HINTS[typ]) errors.push(`${label}: unbekannter typ "${typ}"`);
  if (!q.text.endsWith(HINTS[typ])) errors.push(`${label}: Hinweis passt nicht zu typ ${typ}`);
  if (q.options.length < 3 || q.options.length > 4) errors.push(`${label}: ${q.options.length} Antworten (erlaubt: 3–4)`);
  if (!'ABCD'.startsWith(letters)) errors.push(`${label}: Antwortbuchstaben ${letters} nicht fortlaufend`);
  if (typ === 'single' && correctCount !== 1) errors.push(`${label}: single mit ${correctCount} richtigen Antworten`);
  if (typ === 'multi' && correctCount < 2) errors.push(`${label}: multi mit ${correctCount} richtigen Antworten`);
  if (!(Number(punkte) > 0)) errors.push(`${label}: punkte fehlen`);
});

if (errors.length > 0) {
  console.error(`Fehler in ${sourcePath}:\n- ${errors.join('\n- ')}`);
  process.exit(1);
}

const totalPoints = questions.reduce((sum, q) => sum + Number(q.meta.punkte), 0);
const pointsLabel = (points) => `${points} ${Number(points) === 1 ? 'Punkt' : 'Punkte'}`;
const generatedNote = `<!-- Automatisch erzeugt aus ${relative(outDir, sourcePath)} mit \`npm run exam\` – nicht manuell bearbeiten. -->`;

let questionIndex = 0;
const examBody = body
  .filter((line) => !META.test(line) && !line.startsWith('>'))
  .map((line) => {
    if (QUESTION_HEADING.test(line)) {
      const q = questions[questionIndex++];
      return `## Frage ${q.number} (${pointsLabel(q.meta.punkte)})`;
    }
    return line.replace(/^- \[x\] /, '- [ ] ');
  })
  .join('\n')
  .replace(/\n{3,}/g, '\n\n')
  .trim();

const exam = `${generatedNote}

# ${title}

| Name | Datum | Erreichte Punkte |
|---|---|---|
| | | von ${totalPoints} |

## Hinweise zur Bearbeitung

- Die Prüfung umfasst ${questions.length} Fragen mit jeweils 3–4 Antwortmöglichkeiten.
- Bei Fragen mit dem Hinweis ${HINTS.single} ist genau eine Antwort richtig.
- Bei Fragen mit dem Hinweis ${HINTS.multi} können eine oder mehrere Antworten richtig sein.
- Punkte gibt es nur, wenn genau die richtigen Antworten angekreuzt sind. Teilpunkte werden nicht vergeben.

${examBody}
`;

const keyRows = questions.map((q) => {
  const correct = q.options.filter((o) => o.correct).map((o) => o.letter).join(', ');
  return `| ${q.number} | ${q.meta.id} | ${q.meta.typ} | ${q.meta.punkte} | ${correct} |`;
});

const answerKey = `${generatedNote}

# Lösungsschlüssel – ${title}

Gesamtpunktzahl: ${totalPoints}. Bewertung nach dem Prinzip „alles oder nichts“ pro Frage.

| Frage | ID | Typ | Punkte | Richtige Antwort(en) |
|---|---|---|---|---|
${keyRows.join('\n')}
`;

writeFileSync(join(outDir, 'pruefung.md'), exam);
writeFileSync(join(outDir, 'loesungsschluessel.md'), answerKey);

const singleCount = questions.filter((q) => q.meta.typ === 'single').length;
console.log(
  `${questions.length} Fragen (${singleCount} single, ${questions.length - singleCount} multi), ${totalPoints} Punkte → pruefung.md, loesungsschluessel.md`,
);
