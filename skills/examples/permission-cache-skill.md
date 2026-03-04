---
name: permission-cache-debug
description: 后端权限缓存出现命中异常或脏数据时，定位缓存键、失效时机与回源逻辑。
---

# Skill: permission-cache-debug

## When to use
- 权限变更后未生效
- 同用户不同角色返回结果不一致

## Steps
1. 确认缓存键包含 userId + tenantId + scope。
2. 检查写路径是否触发失效。
3. 检查失效后是否正确回源并重建缓存。

## Validation
- 连续两次请求：第一次回源，第二次命中缓存。
- 权限更新后首次请求应回源并返回新结果。
