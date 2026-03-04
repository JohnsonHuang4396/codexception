# Agent Rules (MVP)

## Purpose
这个仓库用于 Codex 版“知识沉淀”流程验证。

## Working Rules
- 每次任务结束后，必须执行一次“是否可沉淀为 skill”的评估。
- 如果可沉淀，按 `skills/skill-template.md` 生成新 skill 文档。
- 不允许复制模糊经验，必须写清楚：触发条件、步骤、验证方法、反例。

## Quality Gate
- 可复现：他人按步骤可执行。
- 可检索：标题与描述包含真实报错/场景关键字。
- 可复用：不能只绑定一次性上下文。

## Storage
- 新技能落盘到：`skills/<topic>/SKILL.md`
- 设计文档落盘到：`docs/plans/YYYY-MM-DD-<topic>-design.md`
