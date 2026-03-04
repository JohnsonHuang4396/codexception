# What is test-skill-parsing.yaml?

`test-skill-parsing.yaml` is a **frontmatter parsing fixture**.

It validates that the parser preserves fields correctly when skill YAML frontmatter contains special characters such as `:`, `"`, and `|`.

## Can this project use it?

Yes. It is already wired in this repository.

- Fixture file: `tests/fixtures/test-skill-parsing.yaml`
- Test script: `scripts/test-skill-parsing.js`

## How to run

```bash
node scripts/test-skill-parsing.js
```

Expected output:

```text
Frontmatter parsing test passed for special characters.
```

## What regressions it prevents

When you later build automation that parses skill frontmatter, this test helps prevent:

- Truncation of multiline blocks like `description: |`
- Misinterpreting content with colons as new keys
- Incorrect escaping or loss of quotes and pipe characters
