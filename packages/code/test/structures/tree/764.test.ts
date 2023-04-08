import { describe, expect, it } from 'vitest'
import { createNaryTree, levelOrder } from '../../../src/structures/tree/764'

describe('levelOrder', () => {
  it.skip('exported', () => {
    expect(levelOrder(
      createNaryTree([1, null, 3, 2, 4, null, 5, 6]),
    )).toStrictEqual([[1], [3, 2, 4], [5, 6]])
    expect(levelOrder(
      createNaryTree([1, null, 2, 3, 4, 5, null, null, 6, 7, null, 8, null, 9, 10, null, null, 11, null, 12, null, 13, null, null, 14]),
    )).toStrictEqual([[1], [2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13], [14]])
  })
})
