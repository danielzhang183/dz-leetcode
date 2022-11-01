import { describe, expect, it } from 'vitest'
import { permuteUnique } from '../../../src/algorithms/back-tracking/047'

describe('permuteUnique', () => {
  it('exported', () => {
    expect(permuteUnique([1, 1, 2])).toBe([1, 2, 3])
  })
})
