# codexception

Codex-oriented implementation of a continuous skill-extraction workflow.

Instead of losing hard-won debugging and implementation knowledge after each task, this project captures reusable patterns as structured skills and keeps them retrievable for future work.

## Installation

### Quick install (CLI, antfu-style)

Install all skills from this repo:

```bash
pnpx skills add JohnsonHuang4396/codexception --skill='*'
```

Install globally:

```bash
pnpx skills add JohnsonHuang4396/codexception --skill='*' -g
```

### Alternative install (local script)

If you prefer explicit file copy (or do not use the `skills` CLI), run:

```powershell
pwsh -File scripts/install-skills.ps1 -Scope user
```

For project-local installation:

```powershell
pwsh -File scripts/install-skills.ps1 -Scope project -ProjectRoot <your-project-path>
```

### Parser sanity test (optional)

```bash
node scripts/test-skill-parsing.js
```

This confirms frontmatter parsing remains stable for special characters.

## Usage

### Automatic Mode

The workflow is enforced through project rules in `AGENTS.md`:
- Finish task
- Run post-task review
- Extract reusable knowledge into a skill when quality gates pass

### Explicit Mode

You can manually create a new skill from a completed task:
1. Copy `skills/skill-template.md`
2. Fill trigger conditions, solution steps, and validation
3. Save as `skills/<topic>/SKILL.md`

### What Gets Extracted

Only knowledge that is:
- Reusable in future tasks
- Non-trivial (required investigation, not simple lookup)
- Specific enough to be matched by scenario and keywords
- Verified with observable outcomes

## Research

The workflow design is informed by prior agent-learning literature and skills-system practices.

See:
- `docs/references/research-references.md`

## How It Works

Codex can operate with a skill-oriented repository structure:
- Skill files contain searchable frontmatter + executable guidance
- Retrieval quality depends on precise descriptions and trigger conditions
- Post-task extraction continuously expands the local skill library

This project focuses on reliable, reproducible skill authoring before adding heavy automation.

## Skill Format

Skills are markdown files with YAML frontmatter and structured sections:

```yaml
---
name: <kebab-case-skill-name>
description: |
  Clear scenario + trigger conditions + problem scope.
author: Codex
version: 1.0.0
date: YYYY-MM-DD
---
```

Use the canonical template:
- `skills/skill-template.md`

## Quality Gates

A skill should be saved only if it is:
- Reproducible
- Searchable
- Reusable
- Verified

If any gate fails, keep the insight in task notes instead of creating a skill.

## Examples

Migrated and local examples:
- `skills/examples/nextjs-server-side-error-debugging/SKILL.md`
- `skills/examples/prisma-connection-pool-exhaustion/SKILL.md`
- `skills/examples/typescript-circular-dependency/SKILL.md`
- `skills/examples/permission-cache-skill.md`

## Contributing

Contributions are welcome.

Suggested flow:
1. Propose improvements to template or quality gates
2. Add a concrete, validated skill example
3. Include verification evidence in docs or scripts when relevant

## License

MIT
