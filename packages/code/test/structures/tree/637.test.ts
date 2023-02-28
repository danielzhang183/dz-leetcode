import { describe, expect, it } from 'vitest'
import { averageOfLevels } from '../../../src/structures/tree/637'
import { createBinaryTree } from '../../../src/utils'

describe('averageOfLevels', () => {
  it('exported', () => {
    expect(averageOfLevels(createBinaryTree([3, 9, 20, null, null, 15, 7]))).toStrictEqual([3.00000, 14.50000, 11.00000])
    expect(averageOfLevels(createBinaryTree([3, 9, 20, 15, 7]))).toStrictEqual([3.00000, 14.50000, 11.00000])
    expect(averageOfLevels(createBinaryTree([3, 1, 5, 0, 2, 4, 6]))).toStrictEqual([3.00000, 3.00000, 3.00000])
    expect(averageOfLevels(createBinaryTree([98, 97, null, 88, null, 84, null, 79, 87, 64, null, null, null, 63, 69, 62, null, null, null, 30, null, 27, 59, 9, null, null, null, 3, null, 0, null, -4, null, -16, null, -18, -7, -19, null, null, null, -23, null, -34, null, -42, null, -59, null, -63, null, -64, null, -69, null, -75, null, -81])))
      .toStrictEqual([98.00000, 97.00000, 88.00000, 84.00000, 83.00000, 64.00000, 66.00000, 62.00000, 30.00000, 43.00000, 9.00000, 3.00000, 0.00000, -4.00000, -16.00000, -12.50000, -19.00000, -23.00000, -34.00000, -42.00000, -59.00000, -63.00000, -64.00000, -69.00000, -75.00000, -81.00000])
  })
})
