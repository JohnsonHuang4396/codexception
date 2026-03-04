---
name: codex-claudeception-migration
description: 当需要把 Claude Code 的技能沉淀工作流迁移到 Codex 时使用；适用于 .claude/skills、hooks、命令模板到 AGENTS.md + skills/ 的落地改造。
---

# Skill: codex-claudeception-migration

## When to use
- 仓库里已有 `.claude/skills` 或 Claude 专用指令，目标是迁移到 Codex。
- 团队希望保留“任务后复盘 -> 沉淀技能”的方法，但不依赖 Claude Hook。
- 需要先做最小 MVP（目录 + 文档 + 手工流程），再决定是否自动化。

## Inputs
- 现有 Claudeception 结构（README、SKILL、templates、scripts）
- 目标 Codex 环境约束（可写目录、AGENTS 规则、可用工具）
- 迁移目标范围（MVP or full migration）

## Steps
1. 识别不可直接复用部分：Claude Hook、Claude 专属工具名、命令入口。
2. 映射目录：将 `.claude/skills/*` 映射到 `skills/*`，将模板映射到 `docs/` 或 `scripts/`。
3. 在 `AGENTS.md` 写入强制复盘规则和质量门槛（可复现、可检索、可复用）。
4. 提供统一技能模板（frontmatter + when/steps/validation/anti-patterns）。
5. 先产出一个真实样例技能并验证可用，再评估自动化脚本。

## Validation
- 检查点 1：项目包含 `AGENTS.md`、`skills/skill-template.md`、迁移清单文档。
- 检查点 2：至少有 1 个正式技能文件位于 `skills/<topic>/SKILL.md`。
- 检查点 3：该技能包含明确触发条件、可执行步骤、可观测验证点。
- 检查点 4：后续任务能根据场景命中该技能并复用流程。

## Anti-patterns
- 直接复制 Claude Hook 配置，未改成 Codex 可执行规则。
- 技能描述过泛，缺少真实关键词，导致无法检索命中。
- 把一次性经验写成技能，没有复用价值。
- 在没有样例验证前就投入复杂自动化。

## Example
- 场景：从 Claudeception 迁移到 Codex，先建立 `codexception-mvp`。
- 输出：完成目录骨架、`AGENTS.md` 复盘规则、迁移 checklist、一个正式迁移 skill。
- 结果：团队可先手工沉淀，后续再脚本化生成技能。
