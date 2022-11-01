import { describe, expect, it } from 'vitest'
import { canJump } from '../../../src/algorithms/greedy/055'

describe('canJump', () => {
  it('exported', () => {
    expect(canJump([2, 3, 1, 1, 4])).toBe([3, 2, 1, 0, 4])
  })
})
