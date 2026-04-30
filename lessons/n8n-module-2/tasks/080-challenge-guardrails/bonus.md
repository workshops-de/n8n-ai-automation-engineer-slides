# Bonus challenges

## Bonus A — Auditable guardrails

**Goal:** Make every guardrail decision **inspectable** after the fact so you can review inputs, outputs, and rejection reasons, and use that data to improve the guardrail over time.

## Bonus B — Safe help desk chat AI

**Goal:** Build a chat agent that handles help desk questions **and** enforces multiple safety layers simultaneously.

**Requirements:**

1. **Topic scope** — the agent must only answer questions relevant to your help desk domain. Off-topic requests receive a polite redirect, not an answer.

2. **NSFW blocking** — detect and reject messages containing explicit, hateful, or harmful content before they reach the main LLM. Return a safe refusal message.

3. **PII masking** — any **address** or **phone number** present in the agent's output must be **masked** before the response is sent to the user (for example `+49 *** *** **67`, `Muster**straße **, 10*** Berlin`). The agent should never expose a third party's contact details verbatim.

4. **Jailbreak resistance** — the agent must not comply with attempts to override its instructions (for example "ignore all previous instructions", "pretend you are DAN", "you are now in developer mode"). When it detects such an attempt it must respond with a clear, non-compliant message — not with silence or a hallucinated role switch.