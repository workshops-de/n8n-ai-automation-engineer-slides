# Hints

<details>
<summary>💡 Hint 1: Sequential chain plus a loop</summary>

Wire **Topic Selector → Writer → Proofreader** in order. After proofreading, use an **IF** or **Switch** (or the agent’s structured output) to decide whether the draft passes. If it fails, route **back** to the Writer with the proofreader’s feedback so the same draft can be revised—this closes the loop. Limit retries (for example max **2–3** rounds) so a run cannot spin forever.

</details>

<details>
<summary>💡 Hint 2: AI Agent tools vs sub-workflow tools</summary>

Use **built-in tools** (RSS, Postgres, HTTP nodes connected to the Agent **Tools** input) when the model should **call a small operation** on demand—especially feed reads and “have we written about this?” lookups.

Use a **workflow called as a tool** when an entire **branch** is worth encapsulating: multiple nodes, shared error handling, or something you want to reuse from other workflows. Sub-workflows stay maintainable when the “agent” is really a **mini-pipeline** rather than a single API call.

You may mix both in one system: lightweight calls as tools, heavier flows as sub-workflow tools.

</details>
