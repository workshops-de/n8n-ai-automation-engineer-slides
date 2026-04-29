# Trainer notes

## Timing

Plan **35–45 minutes**: Tables UI setup + two Postgres tools + prompt tuning usually dominates.

## Concept hook

Connect this task to **product** scenarios: caching expensive LLM calls, audit trail of generated news copy, analytics on “what we summarized.”

## Pitfalls

- **Different schemas**: learners create table under `public` but credential defaults elsewhere—verify search path / schema-qualified names (`public.article_summaries`).
- **Tool routing**: Claude chooses RSS instead of Postgres—keep tool descriptions mutually exclusive (“database lookup”, “RSS fetch”).
- **Order of operations**: inserting before summarizing yields empty summaries—stress lookup → generate → insert.

## Stretch discussion

Soft-delete (`archived`), versioning (`generated_at`, prompt hash), or admin overwrite workflows.

## Optional fallback

If the Tables UI is unavailable or confusing for a cohort, you may demo equivalent DDL in SQL Editor—but the authored curriculum assumes **Tables**-first creation.
