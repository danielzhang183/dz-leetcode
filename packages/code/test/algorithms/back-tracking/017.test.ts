import { describe, expect, it } from 'vitest'
import { letterCombinations } from '../../../src/algorithms/back-tracking/017'

describe('letterCombinations', () => {
  it('exported', () => {
    expect(letterCombinations('23')).toBe('')
  })
})
