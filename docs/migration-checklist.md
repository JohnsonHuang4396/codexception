# Migration Checklist: Claudeception -> Codex

## 1. Paths and Layout
- [ ] Map `.claude/skills/*` to `skills/*`
- [ ] Move command templates into `docs/` or `scripts/`

## 2. Provider-specific Content
- [ ] Remove Claude-specific invocation text
- [ ] Rewrite steps into Codex-executable instructions

## 3. Workflow Rules
- [ ] Add mandatory post-task review rule in `AGENTS.md`
- [ ] Define quality gate (reproducible/searchable/reusable)

## 4. Validation
- [ ] Validate with at least one real task-derived skill
- [ ] Confirm later tasks can correctly trigger and reuse that skill

## 5. Automation (Later)
- [ ] Evaluate script-based entrypoints (PowerShell/Node)
- [ ] Consider Hook/CI integration only after manual workflow is stable
