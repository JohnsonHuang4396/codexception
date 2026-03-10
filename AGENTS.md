# Agent Rules (MVP)

## Purpose
This repository validates a Codex-first knowledge consolidation workflow.

## Working Rules
- After every task, run an explicit evaluation: should this be extracted as a skill?
- Default mode is propose-first: present 0-2 candidate learnings, explain why they are reusable, and wait for human approval before creating or updating a long-lived skill.
- If approved, create or update a skill document using `skills/skill-template.md`.
- Do not store vague experience; always document trigger conditions, steps, validation, and anti-patterns.
- Redact or generalize secrets, personal data, internal identifiers, and private workflow details before writing reusable skills.
- Do not convert routine fixes, one-off edits, or user-specific private preferences into repository skills.

## Quality Gate
- Reproducible: another engineer can execute the same steps.
- Searchable: title and description include real error or scenario keywords.
- Reusable: avoid one-off, context-locked knowledge.

## Storage
- New skills: `skills/<topic>/SKILL.md`
- Design docs: `docs/plans/YYYY-MM-DD-<topic>-design.md`
