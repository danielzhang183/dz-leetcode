import { describe, expect, it } from 'vitest'
import { lemonadeChange } from '../../../src/algorithms/greedy/860'

describe('lemonadeChange', () => {
  it('exported', () => {
    expect(lemonadeChange([5, 5, 5, 10, 20])).toBeTruthy()
    expect(lemonadeChange([5, 5, 10, 10, 20])).toBeFalsy()
  })
})
