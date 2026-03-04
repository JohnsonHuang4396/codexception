# Architecture (MVP)

## Workflow
1. Receive task input
2. Execute task
3. Trigger post-task review
4. If quality gate passes, create or update a skill
5. Save skill under `skills/` and keep verification evidence

## Core Principles
- Prove manual workflow first, then automate.
- Optimize skills for retrieval precision and execution determinism.
