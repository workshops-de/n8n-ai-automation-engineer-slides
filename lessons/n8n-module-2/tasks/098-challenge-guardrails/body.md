# Challenge: Guardrails

## Goal

Add a **topic guardrail** to your content generation pipeline so articles are only ever written about a **pre-approved set of topics**. The guardrail is an explicit gate that:

- **Rejects** a proposed topic and triggers a **new topic selection** run.
- **Passes** a proposed topic and lets the **Writer** proceed.

## Step 1 — Define your allowed topic list

Write down the explicit list you will enforce. Choose one of these formats:

| Format | When to use |
| ------ | ----------- |
| **Allowlist** (enumerate accepted topics) | Small, stable topic set; easiest to audit. |
| **Blocklist** (enumerate rejected topics) | Very broad content space with a few banned areas. |
| **Semantic similarity threshold** (embed and compare) | Large flexible topic space where exact string matching fails. |

Document your chosen format and where it lives (hard-coded, database, file, etc).

## Step 2 — Implement the guardrail

Add a dedicated guardrail step **between the Topic Selector and the Writer**:

1. Accept the **proposed topic** (title, URL, summary) as input.
2. Apply your check against the allowed/blocked list.
3. Output a **structured result**:

```json
{
  "passed": true,
  "reason": "Topic matches allowlist category: open-source",
  "topic": { ... }
}
```

or:

```json
{
  "passed": false,
  "reason": "Topic rejected: category 'finance' is not on the allowlist",
  "topic": { ... }
}
```

You may implement this as an **AI Agent** (prompt-based classification) or an **IF node** (string match).

## Step 3 — Wire the fail and pass paths

In your orchestrator workflow:

- **`passed: false`** → route back to the **Topic Selector** to choose another topic. Carry a **rejection reason** so the selector can avoid the same category again. Cap the number of retries to prevent infinite loops.
- **`passed: true`** → proceed to the **Writer** with the approved topic payload.

## Step 4 — Test the guardrail

Run at least two scenarios:

1. **Intentional failure**: manually inject a topic that should be rejected and confirm the workflow re-runs topic selection.
2. **Normal pass**: let the selector choose naturally and verify the writer only runs after a `passed: true` result.
