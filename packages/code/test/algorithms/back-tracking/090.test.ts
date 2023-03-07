import { describe, expect, it } from 'vitest'
import { subsetsWithDup } from '../../../src/algorithms/back-tracking/090'

describe('subsetsWithDup', () => {
  it('exported', () => {
    expect(subsetsWithDup([1, 2, 2])).toStrictEqual([[], [1], [1, 2], [1, 2, 2], [2], [2, 2]])
    expect(subsetsWithDup([0])).toStrictEqual([[], [0]])
  })
})
