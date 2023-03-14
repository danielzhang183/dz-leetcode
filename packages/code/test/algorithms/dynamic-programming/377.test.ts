import { describe, expect, it } from 'vitest'
import { combinationSum4 } from '../../../src/algorithms/dynamic-programming/377'

describe('combinationSum4', () => {
  it('exported', () => {
    expect(combinationSum4([1, 2, 3])).toBe(4)
    expect(combinationSum4([9])).toBe(3)
  })
})
