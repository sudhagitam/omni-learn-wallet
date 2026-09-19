---
description: Token efficiency and context memory guidelines for AI agents
---

# AI Model Context & Token Minimization Rules

1. **Keep Responses Concise**:
   - Return concise code blocks and targeted diffs rather than repeating unmodified boilerplates.

2. **Reference AGENTS.md Index**:
   - Check `AGENTS.md` before searching files to pinpoint exact DOM element IDs (`#usd-input`, `#inr-result`, `#role-modal`).

3. **Context Memory Cache**:
   - Use structured JSON objects for state data to keep prompt payload sizes under 1KB.
