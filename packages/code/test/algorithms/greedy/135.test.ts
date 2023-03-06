import { describe, expect, it } from 'vitest'
import { candy } from '../../../src/algorithms/greedy/135'

describe('candy', () => {
  it('exported', () => {
    expect(candy([1,0,2])).toBe([1,2,2])
  })
})
