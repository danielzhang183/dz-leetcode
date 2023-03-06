import { describe, expect, it } from 'vitest'
import { maxProfit } from '../../../src/algorithms/greedy/122'

describe('maxProfit', () => {
  it('exported', () => {
    expect(maxProfit([7,1,5,3,6,4])).toBe([1,2,3,4,5])
  })
})
