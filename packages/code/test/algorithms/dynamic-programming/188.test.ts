import { describe, expect, it } from 'vitest'
import { maxProfit } from '../../../src/algorithms/dynamic-programming/188'

describe('maxProfit', () => {
  it('exported', () => {
    expect(maxProfit(2)).toBe([2,4,1])
    expect(maxProfit(2)).toBe([3,2,6,5,0,3])
  })
})
