import { describe, expect, it } from 'vitest'
import { pivotIndex } from '../../../src/structures/array/724'

describe('pivotIndex', () => {
  it('exported', () => {
    expect(pivotIndex([1, 7, 3, 6, 5, 6])).toBe(3)
    expect(pivotIndex([1, 2, 3])).toBe(-1)
    expect(pivotIndex([2, 1, -1])).toBe(0)
  })
})
