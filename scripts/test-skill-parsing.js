const fs = require('node:fs')
const path = require('node:path')

function parseFrontmatter(markdown) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match)
    throw new Error('Frontmatter block not found')

  const lines = match[1].split(/\r?\n/)
  const result = {}
  let i = 0

  while (i < lines.length) {
    const line = lines[i]
    if (!line.trim()) {
      i++
      continue
    }

    const kv = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/)
    if (!kv) {
      i++
      continue
    }

    const key = kv[1]
    const value = kv[2]

    if (value === '|') {
      i++
      const block = []
      while (i < lines.length) {
        const next = lines[i]
        if (/^[A-Za-z0-9_-]+:\s*/.test(next))
          break
        block.push(next.replace(/^\s{2}/, ''))
        i++
      }
      result[key] = block.join('\n').trimEnd()
      continue
    }

    result[key] = value.trim().replace(/^"|"$/g, '')
    i++
  }

  return result
}

function assert(condition, message) {
  if (!condition)
    throw new Error(message)
}

const file = path.join(__dirname, '..', 'tests', 'fixtures', 'test-skill-parsing.yaml')
const content = fs.readFileSync(file, 'utf8')
const parsed = parseFrontmatter(content)

assert(parsed.name === 'test-skill', 'name should equal test-skill')
assert(parsed.version === '1.0.0', 'version should equal 1.0.0')
assert(parsed.description.includes('a colon'), 'description should preserve colon text')
assert(parsed.description.includes('"quotes"'), 'description should preserve quote text')
assert(parsed.description.includes('| pipe character'), 'description should preserve pipe text')

console.log('Frontmatter parsing test passed for special characters.')
