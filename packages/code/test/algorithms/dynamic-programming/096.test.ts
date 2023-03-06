import { describe, expect, it } from 'vitest'
import { numTrees } from '../../../src/algorithms/dynamic-programming/096'

describe('numTrees', () => {
  it('exported', () => {
    expect(numTrees(3)).toBe(1)
  })
})
