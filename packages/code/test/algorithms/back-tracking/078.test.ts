import { describe, expect, it } from 'vitest'
import { subsets } from '../../../src/algorithms/back-tracking/078'

describe('subsets', () => {
  it('exported', () => {
    expect(subsets([1, 2, 3])).toStrictEqual([[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]])
    expect(subsets([0])).toStrictEqual([[], [0]])
  })
})
