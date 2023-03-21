import { describe, expect, it } from 'vitest'
import { rob } from '../../../src/algorithms/dynamic-programming/213'

describe('rob', () => {
  it('exported', () => {
    expect(rob([2, 3, 2])).toBe(3)
    expect(rob([1, 2, 3, 1])).toBe(4)
    expect(rob([1, 2, 3])).toBe(3)
  })
})
