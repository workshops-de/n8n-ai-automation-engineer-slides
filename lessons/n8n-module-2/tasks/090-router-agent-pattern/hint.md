<details>
<summary>💡 Hint 1: Passing data from the Router to the Switch node</summary>

The Switch node reads from the item that enters it. If the Router Agent's Structured Output Parser is connected correctly, the output item will look like:

```json
{ "contentType": "instagram_post", "topic": "...", "rationale": "..." }
```

In the Switch node, use an **Expression** rule and reference `{{ $json.contentType }}`.

</details>

<details>
<summary>💡 Hint 2: Passing the topic into each specialist agent</summary>

Each specialist agent needs the `topic` from the router output. The cleanest way is to reference it directly in the agent's **user message** field:

```
Write content for this topic: {{ $('Router Agent').item.json.topic }}
```

This way you do not need extra Set nodes between the Switch and the agents.

</details>

<details>
<summary>💡 Hint 3: Merge node mode</summary>

Because only one branch actually runs per execution (the other two produce no items), use **Merge** in **"Combine all items"** mode. n8n will collect whatever items arrive and pass them on — even if only one branch fired.

Alternatively, connect all three agent outputs to a single **Set** node using the **"Always output data"** option on each branch so empty branches still emit an item, then merge by position.

</details>

<details>
<summary>💡 Hint 4: Consolidation without an extra LLM call</summary>

If you want to avoid a fourth LLM call, you can consolidate in a **Code node** instead:

```js
const items = $input.all();
// Find the item that actually has content
const result = items.find(i => i.json.content) ?? items[0];
return [{ json: result.json }];
```

</details>
