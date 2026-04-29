# Hints

<details>
<summary>Hint 1: Lookup returns nothing even though you inserted rows</summary>

Compare URLs character-for-character (trailing slashes, `http` vs `https`, query strings). Normalize in your prompt (“always store the RSS `<link>` exactly as returned”) or normalize in SQL (`trim`, consistent scheme) if you teach advanced variation.

</details>

<details>
<summary>Hint 2: INSERT fails with duplicate key</summary>

That usually means the URL already exists—your agent should have called lookup first. Teach participants to handle conflict: either skip insert and read the existing row, or catch duplicate errors and fall back to SELECT.

</details>

<details>
<summary>Hint 3: SQL injection worries when building queries</summary>

Avoid pasting unchecked chat text directly into SQL strings. Use Postgres parameters / prepared patterns supported by the Postgres node, or constrain inputs to URLs your RSS tool produced.

</details>
