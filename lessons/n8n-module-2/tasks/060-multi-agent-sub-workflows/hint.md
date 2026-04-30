# Hints

<details>
<summary>💡 Hint 1: Contract before canvas sprawl</summary>

Agree on **field names** (`draft_text`, `feedback`, `approved`) before wiring Execute Workflow nodes. When something breaks, you will know whether the bug is **mapping** between workflows or **logic** inside a child.

</details>

<details>
<summary>💡 Hint 2: Mapping inputs on Execute Workflow</summary>

When the parent calls a child, explicitly map **each expected property** from the previous node’s output (or from static defaults such as word limits). Empty or mismatched mappings are the most common reason children “see nothing.”

</details>

<details>
<summary>💡 Hint 3: Retry loop without infinite runs</summary>

Use a **counter** (for example increment an item field each time the Writer runs after a failed proofread) and stop when `attempt >= max_attempts`. Merge **`feedback`** from the Proofreader into the Writer input so each revision is targeted.

</details>
