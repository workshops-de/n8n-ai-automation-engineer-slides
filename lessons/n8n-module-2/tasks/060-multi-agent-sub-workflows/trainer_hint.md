# Trainer notes

## Timing

- Learners who finished task **050** recently: often **35–45 minutes** once contracts are clear.
- If sub-workflows are new: plan **45–55 minutes** including Execute Workflow mapping debugging.

## Common pitfalls

- **Wrong trigger on children**: The child must start with the trigger meant for **execution from another workflow**, not Chat Trigger only—unless you intentionally duplicate entry paths for demos.
- **Lost structure between workflows**: n8n passes **items**; insist on one consistent JSON shape per hop so nested fields are not dropped when mapping.
- **Unbounded loops**: Remind participants to cap retries before testing with flaky prompts.

## Discussion prompts

- When would you expose a child workflow **both** to the orchestrator and to a **standalone manual test** workflow?
- How does versioning change when multiple teams edit different child workflows?
