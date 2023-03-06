import { describe, expect, it } from 'vitest'
import { searchInsert } from '../../../src/structures/array/035'

describe('searchInsert', () => {
  it('exported', () => {
    expect(searchInsert([1,3,5,6])).toBe(5)
    expect(searchInsert([1,3,5,6])).toBe(2)
    expect(searchInsert([1,3,5,6])).toBe(7)
  })
})
