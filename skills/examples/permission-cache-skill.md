---
name: permission-cache-debug
description: Use when backend permission cache has stale or inconsistent hits; diagnose cache key design, invalidation timing, and fallback-to-source rebuild flow.
---

# Skill: permission-cache-debug

## When to use
- Permission updates are not reflected after writes.
- The same user gets inconsistent permission results across roles or contexts.

## Steps
1. Verify cache keys include `userId + tenantId + scope`.
2. Verify write paths trigger cache invalidation.
3. Verify post-invalidation requests correctly fall back to source and rebuild cache.

## Validation
- Two consecutive requests: first request falls back to source, second request hits cache.
- After a permission update, the first subsequent request should return updated data.
