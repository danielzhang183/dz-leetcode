import { describe, expect, it } from 'vitest'
import { climbStairs } from '../../../src/algorithms/dynamic-programming/070'

describe('climbStairs', () => {
  it('exported', () => {
    expect(climbStairs(2)).toBe(3)
  })
})
