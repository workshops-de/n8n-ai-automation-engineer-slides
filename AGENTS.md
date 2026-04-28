# AI & agent context

This document orients automated assistants and contributors to this repository and its content rules.

## What this project is

- **Purpose**: Workshop slide decks and **course tasks** for the workshops.de platform, aligned with the “AI Automation Engineer with n8n” curriculum.
- **Stack**: Slide content is authored with [Slidev](https://sli.dev/) (`*.md` decks under `lessons/`, index at `00-index.md`). Lesson metadata and tasks are YAML + Markdown consumed when content is synced to the training platform.
- **Layout** (high level):
  - `lessons/<lesson-folder>/lesson.yml` — lesson name, trainer, slides type, GitHub URL, etc.
  - `lessons/<lesson-folder>/tasks/<NNN-task-slug>/` — each task has `task.yml` plus Markdown bodies (`body.md`, optional `hint.md`, `bonus.md`, `trainer_hint.md`).
  - `rules/` — editor and content rules (e.g. `course-content-rules.mdc` for lessons and tasks).

See `README.md` for setup (`npm install`, `npm run dev`) and full folder conventions.

## Language requirement: tasks in English

**All participant-facing task content must be written in English.** That includes:

- `task.yml` — the `title` (and any other user-visible strings if added later).
- `body.md`, `hint.md`, `bonus.md` — instructional text for participants.
- `trainer_hint.md` — trainer-only notes should also be in English so the repo stays consistent for editors and AI tools.

Preparation tasks, challenges, and regular exercises all follow this rule. If you add a new task, default to English even when the live workshop is delivered in another language (localization can happen on the platform or in separate assets if needed).

## Conventions for agents

- Prefer **non-destructive** edits: match existing patterns in `task.yml` and Markdown (headings, checklists, links).
- Follow `rules/course-content-rules.mdc` for structure (required files, success criteria, etc.).
- Do not mix languages within a single task file.
