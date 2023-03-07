import { describe, expect, it } from 'vitest'
import { maxProfit } from '../../../src/algorithms/dynamic-programming/121'

describe('maxProfit', () => {
  it('exported', () => {
    expect(maxProfit([7,1,5,3,6,4])).toBe([7,6,4,3,1])
  })
})
