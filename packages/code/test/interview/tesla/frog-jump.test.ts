import { describe, expect, it } from 'vitest'
import { frogJump } from '../../../src/interview/tesla/frog-jump'

describe('frogJump', () => {
  it('exported', () => {
    expect(frogJump([12, 6, 8, 5])).toBe(3)
    expect(frogJump([1, 5, 5, 2, 6])).toBe(4)
    expect(frogJump([1, 1])).toBe(2)
  })
})
