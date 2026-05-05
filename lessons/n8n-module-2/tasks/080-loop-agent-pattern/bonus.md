# Bonus Challenges

## Bonus 1 — Dynamic retry limit

Instead of hardcoding `MAX_RETRIES = 3`, read the limit from a **workflow variable** or an **environment variable** (`$vars.MAX_RETRIES`). This makes it easy to tune without touching the code.

## Bonus 2 — Track iteration count in the output

Add an `iterationCount` field to the final node's output that records how many writer passes were needed. This is useful for analytics (e.g. "which topics are hardest to write correctly on the first try?").
