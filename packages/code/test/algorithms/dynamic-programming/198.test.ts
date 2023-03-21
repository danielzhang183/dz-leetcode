import { describe, expect, it } from 'vitest'
import { rob } from '../../../src/algorithms/dynamic-programming/198'

describe('rob', () => {
  it('exported', () => {
    expect(rob([1, 2, 3, 1])).toBe(4)
    expect(rob([2, 7, 9, 3, 1])).toBe(12)
  })
})
