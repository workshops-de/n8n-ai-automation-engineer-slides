# Trainer notes

## Timing

- Strong beginners: **35–45 minutes** including troubleshooting RSS wiring and chat testing.
- Experienced n8n users: often **20–25 minutes**.

## Common pitfalls

- **RSS node on the main execution path instead of tools**: The RSS Feed Read node must be attached via the AI Agent **Tools** connector so the model invokes it when needed.
- **Wrong URL**: Typos in `github.blog` or missing trailing slash behavior—paste `https://github.blog/feed/` exactly.
- **Huge outputs**: Remind learners that “news” here means short copy; reinforce the **100-word** cap in debrief.
