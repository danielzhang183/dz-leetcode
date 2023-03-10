import { describe, expect, it } from 'vitest'
import { wiggleMaxLength } from '../../../src/algorithms/greedy/376'

describe('wiggleMaxLength', () => {
  it('exported', () => {
    expect(wiggleMaxLength([1, 7, 4, 9, 2, 5])).toBe(6)
    expect(wiggleMaxLength([1, 17, 5, 10, 13, 15, 10, 5, 16, 8])).toBe(7)
    expect(wiggleMaxLength([1, 2, 2, 2, 1])).toBe(3)
    expect(wiggleMaxLength([2, 2, 5])).toBe(2)
    expect(wiggleMaxLength([1, 2, 2, 2, 3, 4])).toBe(2)
  })
})
