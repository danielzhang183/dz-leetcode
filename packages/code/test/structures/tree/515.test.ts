import { describe, expect, it } from 'vitest'
import { largestValues } from '../../../src/structures/tree/515'
import { createBinaryTree } from '../../../src/utils'

describe('largestValues', () => {
  it('exported', () => {
    expect(createBinaryTree([1, 3, 2, 5, 3, null, 9])).toMatchInlineSnapshot(`
      TreeNode {
        "left": TreeNode {
          "left": TreeNode {
            "left": null,
            "right": null,
            "val": 5,
          },
          "right": TreeNode {
            "left": null,
            "right": null,
            "val": 3,
          },
          "val": 3,
        },
        "right": TreeNode {
          "left": null,
          "right": TreeNode {
            "left": null,
            "right": null,
            "val": 9,
          },
          "val": 2,
        },
        "val": 1,
      }
    `)
    expect(largestValues(createBinaryTree([1, 3, 2, 5, 3, null, 9]))).toStrictEqual([1, 3, 9])
    expect(largestValues(createBinaryTree([1, 2, 3]))).toStrictEqual([1, 3])
  })
})
