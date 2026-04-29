# Hints

## Hint 1: Tables UI — column checklist

Recreate the same shape as this schema when clicking columns in Neon **Tables**:

- **`id`** — integer, primary key, auto-generated identity  
- **`source_url`** — text, not null, **unique**  
- **`summary`** — text, not null  
- **`created_at`** — timestamp, default **now()**, not null  

If anything looks ambiguous in the wizard, compare against the SQL in the next hint.



## Hint 2: Equivalent SQL (reference only)

The exercise expects you to build the table in the **Tables** UI. If you need the exact relational definition—for example to sanity-check types or to run in SQL Editor as a fallback—use:

```sql
CREATE TABLE "article_summaries" (
  "id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "article_summaries_id_seq"),
  "source_url" text NOT NULL UNIQUE,
  "summary" text NOT NULL,
  "created_at" timestamp DEFAULT now() NOT NULL
);
```

Adjust only if Neon already created objects with conflicting names.
