import type { TestCase } from 'dz-leetcode'
import { describe, expect, it } from 'vitest'

function normalizeTestCases(content: string) {
  const regex = /<strong>Input:<\/strong> \w+ = (.*?)(, target = (.*?))?\s*<strong>Output:<\/strong> (\[*[\w\d,]+\]*)/gm
  const testcases: TestCase[] = []
  let m
  // eslint-disable-next-line no-cond-assign
  while ((m = regex.exec(content)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex)
      regex.lastIndex++

    // eslint-disable-next-line no-console
    m.forEach((m, index) => console.log(`group${index}: ${m}`))

    const hasTarget = !!m[3]
    hasTarget
      ? testcases.push({ expect: `${m[1]}, ${m[3]}`, toBe: m[4] })
      : testcases.push({ expect: m[1], toBe: m[4] })
  }
  return testcases
}

describe('normalize', () => {
  it('Testcases', async () => {
    const content = `
<p><strong class=\\"example\\">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [[2,7,11,15]]
<strong>Output:</strong> [0,1]
<strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
</pre>

<p><strong class=\\"example\\">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = 3, target = 6
<strong>Output:</strong> [[1,2]]
</pre>

<p><strong class=\\"example\\">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,3], target = 6
<strong>Output:</strong> 2
</pre>
`
    expect(normalizeTestCases(content)).toMatchInlineSnapshot(`
      [
        {
          "expect": "[[2,7,11,15]]",
          "toBe": "[0,1]",
        },
        {
          "expect": "3, 6",
          "toBe": "[[1,2]]",
        },
        {
          "expect": "[3,3], 6",
          "toBe": "2",
        },
      ]
    `)
  })
})
