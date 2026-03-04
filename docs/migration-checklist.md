# Migration Checklist: Claudeception -> Codex

## 1. Path & Layout
- [ ] 将 `.claude/skills/*` 映射到 `skills/*`
- [ ] 将命令模板迁移到 `docs/` 或 `scripts/`

## 2. Provider-specific Content
- [ ] 删除 Claude 专有调用语句
- [ ] 改写为 Codex 可执行指令

## 3. Workflow Rules
- [ ] 在 `AGENTS.md` 写入强制复盘规则
- [ ] 定义质量门槛（可复现/可检索/可复用）

## 4. Validation
- [ ] 用真实任务验证至少 1 个新增 skill
- [ ] 验证 skill 能被后续任务正确触发

## 5. Automation (later)
- [ ] 评估脚本化入口（PowerShell/Node）
- [ ] 再考虑 Hook/CI 集成
