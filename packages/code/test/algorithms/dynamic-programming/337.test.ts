import { describe, expect, it } from 'vitest'
import { rob } from '../../../src/algorithms/dynamic-programming/337'

describe('rob', () => {
  it('exported', () => {
    expect(rob([3, 2, 3, null, 3, null, 1])).toBe([3, 4, 5, 1, 3, null, 1])
  })
})
