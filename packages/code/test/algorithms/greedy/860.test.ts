import { describe, expect, it } from 'vitest'
import { lemonadeChange } from '../../../src/algorithms/greedy/860'

describe('lemonadeChange', () => {
  it('exported', () => {
    expect(lemonadeChange([5, 5, 5, 10, 20])).toBe(true)
    expect(lemonadeChange([5, 5, 10, 10, 20])).toBe(false)
  })
})
