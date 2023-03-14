import { describe, expect, it } from 'vitest'
import { maxUncrossedLines } from '../../../src/algorithms/dynamic-programming/1035'

describe('maxUncrossedLines', () => {
  it('exported', () => {
    expect(maxUncrossedLines([1, 4, 2])).toBe([1, 2, 4])
    expect(maxUncrossedLines([2, 5, 1, 2, 5])).toBe([10, 5, 2, 1, 5, 2])
    expect(maxUncrossedLines([1, 3, 7, 1, 7, 5])).toBe([1, 9, 2, 5, 1])
  })
})
