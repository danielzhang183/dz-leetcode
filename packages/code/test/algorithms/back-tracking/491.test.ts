import { describe, expect, it } from 'vitest'
import { findSubsequences } from '../../../src/algorithms/back-tracking/491'

describe('findSubsequences', () => {
  it('exported', () => {
    expect(findSubsequences([4, 6, 7, 7])).toStrictEqual([
      [4, 6], [4, 6, 7], [4, 6, 7, 7], [4, 7],
      [4, 7, 7], [6, 7], [6, 7, 7], [7, 7],
    ])
    expect(findSubsequences([4, 4, 3, 2, 1])).toStrictEqual([[4, 4]])
  })
})
