# test-skill-parsing.yaml 是什么？

`test-skill-parsing.yaml` 是一个 **frontmatter 解析测试夹具（fixture）**。

它专门用于验证：当 skill 的 YAML 头里包含特殊字符（如 `:`, `"`, `|`）时，解析器不会把字段切坏。

## 在本项目中是否可用

可以，已经可用。

- 夹具文件：`tests/fixtures/test-skill-parsing.yaml`
- 测试脚本：`scripts/test-skill-parsing.js`

## 如何运行

```bash
node scripts/test-skill-parsing.js
```

预期输出：

```text
Frontmatter parsing test passed for special characters.
```

## 这个测试解决的问题

当你后续写自动化脚本去读取 skill frontmatter 时，这个测试可以防止以下回归：

- `description: |` 多行块被截断
- 包含冒号的文本被误当作新 key
- 引号和管道符被错误转义或丢失
