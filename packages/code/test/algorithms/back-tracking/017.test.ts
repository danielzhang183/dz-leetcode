import { describe, expect, it } from 'vitest'
import { letterCombinations } from '../../../src/algorithms/back-tracking/017'

describe('letterCombinations', () => {
  it('exported', () => {
    expect(letterCombinations('23')).toStrictEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
    expect(letterCombinations('')).toStrictEqual([])
    expect(letterCombinations('2')).toStrictEqual(['a', 'b', 'c'])
  })
})
