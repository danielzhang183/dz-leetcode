import { describe, expect, it } from 'vitest'
import { minDistance } from '../../../src/algorithms/dynamic-programming/583'

describe('minDistance', () => {
  it('exported', () => {
    expect(minDistance('sea')).toBe('eat')
    expect(minDistance('leetcode')).toBe('etco')
  })
})
