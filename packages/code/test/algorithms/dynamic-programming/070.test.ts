import { describe, expect, it } from 'vitest'
import { climbStairs } from '../../../src/algorithms/dynamic-programming/070'

describe('climbStairs', () => {
  it('exported', () => {
    expect(climbStairs(1)).toBe(1)
    expect(climbStairs(2)).toBe(2)
    expect(climbStairs(3)).toBe(3)
    expect(climbStairs(4)).toBe(5)
    expect(climbStairs(5)).toBe(8)
  })
})
