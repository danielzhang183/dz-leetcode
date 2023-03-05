import { describe, expect, it } from 'vitest'
import { combine } from '../../../src/algorithms/back-tracking/077'

describe('combine', () => {
  it('exported', () => {
    expect(combine(4, 2)).toStrictEqual([[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]])
    // expect(combine(1, 1)).toBe([[1]])
  })
})
