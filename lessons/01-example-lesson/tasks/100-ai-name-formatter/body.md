# AI Name Formatter - Creative Nicknames

## Goal

Transform a list of names into creative nicknames using AI.

## What You'll Learn

- Using AI for creative text generation
- Looping through items
- Using Set Node for static data
- Function Node for formatting

## Workflow Overview

**Set Node (List of Names)** → **AI Agent** → **Code Node (Formatting)**

## Step-by-Step Guide

### 1. Create Name List with Set Node

- Add a **Manual Trigger**
- Add a **Set Node**
- Create a list of names in JSON format:

```json
[
  {"name": "Anna Schmidt"},
  {"name": "Max Müller"},
  {"name": "Lisa Weber"},
  {"name": "Tom Fischer"},
  {"name": "Sara Klein"}
]
```

**Tip**: Use "Add Field" in the Set Node or the JSON editor

### 2. AI Agent for Nickname Generation

- Add an **AI Agent** or **OpenAI** Node
- **IMPORTANT**: Do NOT activate "Execute Once" in the node - it should run for each item
- System Prompt:
  ```
  You are a creative nickname generator.
  
  Given a person's name, create a fun, unique nickname.
  
  Rules:
  1. The nickname should be positive and fun
  2. It can play on the name itself or be completely creative
  3. Keep it appropriate and friendly
  4. Output only the nickname, nothing else
  
  Example: "Anna Schmidt" → "The Schmidtinator"
  ```
- User Prompt: `Generate a creative nickname for: {{ $json.name }}`

### 3. Code Node for Formatting

- Add a **Code Node** (JavaScript)
- Format the output:

```javascript
// Code to format the output
const items = [];

for (const item of $input.all()) {
  items.push({
    original_name: item.json.name,
    nickname: item.json.output || item.json.text,
    timestamp: new Date().toISOString()
  });
}

return items;
```

### 4. Optional: Save Result

- Add a **Google Sheets** Node
- Save the results in a Sheet with columns:
  - Original Name
  - Nickname
  - Timestamp

### 5. Test

- Execute the workflow
- Check the generated nicknames
- Experiment with different names

## Learning Objectives

✓ Use Set Node for static data lists
✓ Use AI for creative text generation
✓ Implement loops over multiple items
✓ Use Code Nodes for data formatting
✓ Process JSON data structures

## Success Criteria

- [ ] Set Node contains at least 5 names
- [ ] AI generates unique nicknames for each name
- [ ] Workflow processes all items
- [ ] Output is neatly formatted
- [ ] Nicknames are creative and appropriate
