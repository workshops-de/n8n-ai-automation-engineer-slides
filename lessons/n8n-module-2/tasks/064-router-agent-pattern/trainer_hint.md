# Trainer Notes

## Time estimates

| Skill level | Expected time |
| ----------- | ------------- |
| Comfortable with agents | 25–35 min |
| Still learning Switch/Merge nodes | 40–50 min |

## Common issues

**"The Switch node never matches / all items go to the fallback output"**
Usually the `contentType` value has leading/trailing whitespace or the LLM returns a value like `"Instagram Post"` instead of `"instagram_post"`. Ask participants to check the raw router output in the execution log and adjust the Switch rules or the system prompt accordingly.

**"The Merge node only receives one item, not three"**
Expected behaviour — only one branch fires per run. The Merge node in "Combine all items" mode passes through whatever arrives. Participants sometimes expect all three branches to produce output simultaneously; clarify that the Router pattern routes to exactly one branch.

**"Specialist agent output is too long / not following format"**
Encourage tighter system prompts. Adding a concrete example output directly in the prompt ("Your response must look exactly like this: ...") usually fixes format compliance immediately.

**"How do I test all three branches without running the workflow three times?"**
Use n8n's **Pin data** feature: pin the router output item to each of the three content type values in turn, then run the downstream nodes directly.

## Discussion points

- Router vs. Switch: when would you let a model decide vs. using deterministic rules (e.g. keyword matching)?
- How does this pattern relate to microservices / single-responsibility principle in software architecture?
- What are the cost implications of routing vs. fan-out (Bonus 3)?

## Setup requirements

No special setup beyond a working n8n instance with an LLM configured. The task is self-contained and does not depend on Neon or RSS feeds.
