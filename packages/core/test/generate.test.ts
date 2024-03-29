import { describe, expect, it } from 'vitest'
import { genCatalog, genCode, genMarkdown, genTestCase } from '../src/generate/gen'
import { resolvedQuestion } from './fixture'

describe('generate content', () => {
  it('markdown', async () => {
    const markdown = await genMarkdown(resolvedQuestion)
    expect(markdown).toMatchSnapshot('markdown')
    const { outFile } = markdown
    expect(outFile).toMatchInlineSnapshot('"/Users/dylanzhang/i/dz-leetcode/packages/docs/src/pages/algorithms/array/001.md"')
  })

  it('code', async () => {
    const code = await genCode(resolvedQuestion)
    expect(code).toMatchSnapshot('code')
    const { outFile, content } = code
    expect(content).toMatchInlineSnapshot(`
      "export function twoSum(nums: number[], target: number): number[] {

      };"
    `)
    expect(outFile).toMatchInlineSnapshot('"/Users/dylanzhang/i/dz-leetcode/packages/code/src/algorithms/array/001.ts"')
  })

  it('testcases', async () => {
    const testcases = await genTestCase(resolvedQuestion)
    expect(testcases).toMatchSnapshot('testcases')
    const { outFile, content } = testcases
    expect(content).toMatchInlineSnapshot(`
      "import { describe, expect, it } from 'vitest'
      import { twoSum } from '../../../src/algorithms/array/001'

      describe('twoSum', () => {
        it('exported', () => {
          expect(twoSum([2,7,11,15])).toBe(9)
          expect(twoSum([3,2,4])).toBe(6)
          expect(twoSum([3,3])).toBe(6)
        })
      })
      "
    `)
    expect(outFile).toMatchInlineSnapshot('"/Users/dylanzhang/i/dz-leetcode/packages/code/test/algorithms/array/001.test.ts"')
  })

  it('catelog', async () => {
    const catelog = await genCatalog(resolvedQuestion)
    expect(catelog).toMatchSnapshot('catelog')
    const { outFile, content } = catelog
    expect(content).toMatchInlineSnapshot(`
      "questions:
        - name: Two Sum
          title: two-sum
          difficulty: Easy
          id: 1
          link: /algorithms/array/001
          origin: https://leetcode.cn/problems/two-sum
          tag: array
          category: algorithms"
    `)
    expect(outFile).toMatchInlineSnapshot('"/Users/dylanzhang/i/dz-leetcode/packages/docs/data/algorithms/array.yml"')
  })
})
