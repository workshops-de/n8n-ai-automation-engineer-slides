# Bonus Challenges

## Bonus 1 — Add a fourth "auto" format

Extend the router with a fourth content type: `linkedin_post`. The router should choose it for topics that are professional but not deeply technical. Add the corresponding specialist agent and update the Switch node.

## Bonus 2 — Confidence score

Add a `confidence` field (0–100) to the Router Agent's structured output. If `confidence < 60`, route to a **clarification node** that asks the user for more context before proceeding.

## Bonus 3 — Run all three branches in parallel

Instead of routing to only one branch, change the workflow so **all three** specialist agents always run in parallel (remove the Switch, connect the router directly to all three agents). The Merge node then compares all three outputs and the consolidation agent picks the best one.

This is the **Fan-out / Fan-in** pattern — useful when you want to generate multiple variants and select the strongest.
