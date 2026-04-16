# HTTP Node – Fetch & Display API Data

## Goal

Use the HTTP Request node to fetch data from a public REST API and display the results in a formatted way – no dedicated integration needed.

## What You'll Learn

- Using the HTTP Request node to call any REST API
- Configuring request method, URL, and headers
- Accessing and mapping JSON response data
- Using `{{ $json.field }}` expressions in downstream nodes

## Workflow Overview

**Manual Trigger** → **HTTP Request** → **Code Node** → **Result**

## Step-by-Step Guide

### 1. Add a Manual Trigger

- Add a **Manual Trigger** node to your canvas
- This will start the workflow when you click "Execute"

### 2. Add an HTTP Request Node

- Add an **HTTP Request** node
- Set **Method** to `GET`
- Set **URL** to:
  ```
  https://jsonplaceholder.typicode.com/users
  ```
- Leave all other settings at their default
- Connect the Manual Trigger to the HTTP Request node

### 3. Test the Request

- Click **Execute Workflow**
- You should see a response with **10 user objects**, each containing:
  - `id`, `name`, `username`, `email`
  - `address` (with `street`, `city`, `zipcode`)
  - `phone`, `website`
  - `company` (with `name`, `catchPhrase`)

### 4. Format the Output

- Add a **Code** node after the HTTP Request node
- Use this code to format the result:

```javascript
return $input.all().map(item => {
  const user = item.json;
  return {
    json: {
      name: user.name,
      email: user.email,
      company: user.company.name,
      city: user.address.city,
    }
  };
});
```

- You should now see a clean list with only the relevant fields

### 5. Verify the Result

- Check that each item contains: `name`, `email`, `company`, `city`
- The workflow should return exactly 10 formatted user entries

## Learning Objectives

- ✓ Configure an HTTP Request node (method, URL)
- ✓ Read and navigate JSON response data
- ✓ Transform API responses with a Code node
- ✓ Use `$input.all()` to process multiple items

## Success Criteria

- [ ] Manual Trigger starts the workflow
- [ ] HTTP Request fetches data from `jsonplaceholder.typicode.com/users`
- [ ] Response contains 10 user objects
- [ ] Code node extracts `name`, `email`, `company`, and `city`
- [ ] Final output shows a clean, formatted list
