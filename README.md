# codexception-mvp

A minimum viable project (MVP) to migrate Claudeception's skill-extraction workflow into Codex.

## Goals
- Define a Codex-executable workflow for post-task review -> skill extraction -> persistent storage.
- Start with project structure and documentation first, without automation hooks.

## Current Scope (MVP v0)
- Documentation conventions
- Skill template
- Execution checklist

## Out of Scope (for now)
- Automatic hook injection
- Large-scale script automation
- CI integration

## Next Steps
1. Complete document-level migration using `docs/migration-checklist.md`.
2. Produce the first real skill from an actual task.
3. Decide whether to add script automation in `scripts/`.

## Migrated from Claudeception

- Core skill migrated: `skills/continuous-learning/SKILL.md`
- Official examples migrated:
  - `skills/examples/nextjs-server-side-error-debugging/SKILL.md`
  - `skills/examples/prisma-connection-pool-exhaustion/SKILL.md`
  - `skills/examples/typescript-circular-dependency/SKILL.md`
- Parsing fixture and test:
  - `tests/fixtures/test-skill-parsing.yaml`
  - `scripts/test-skill-parsing.js`
  - `docs/test-skill-parsing.md`
- Research reference document:
  - `docs/references/research-references.md`
