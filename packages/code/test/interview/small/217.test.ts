import { describe, expect, it } from 'vitest'
import { containsDuplicate } from '../../../src/interview/small/217'

describe('containsDuplicate', () => {
  it('exported', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true)
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false)
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true)
  })
})
