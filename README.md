# codexception-mvp

最小可行项目（MVP），用于把 Claudeception 的知识沉淀工作流移植到 Codex。

## 目标
- 定义一套可在 Codex 中执行的“任务后复盘 -> 提炼技能 -> 落盘”流程。
- 先从目录结构和文档开始，不做自动化 hook。

## 当前范围（MVP v0）
- 文档规范
- 技能模板
- 执行清单

## 非目标（当前不做）
- 自动 Hook 注入
- 大规模脚本自动化
- CI 集成

## 下一步
1. 先按 `docs/migration-checklist.md` 完成文档内迁移。
2. 用一个真实任务产出第一个技能样例。
3. 再决定是否补 `scripts/` 自动化。

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
