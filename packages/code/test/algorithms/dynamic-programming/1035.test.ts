import { describe, expect, it } from 'vitest'
import { maxUncrossedLines } from '../../../src/algorithms/dynamic-programming/1035'

describe('maxUncrossedLines', () => {
  it('exported', () => {
    expect(maxUncrossedLines([1, 4, 2], [1, 2, 4])).toBe(2)
    expect(maxUncrossedLines([2, 5, 1, 2, 5], [10, 5, 2, 1, 5, 2])).toBe(3)
    expect(maxUncrossedLines([1, 3, 7, 1, 7, 5], [1, 9, 2, 5, 1])).toBe(2)
  })
})
