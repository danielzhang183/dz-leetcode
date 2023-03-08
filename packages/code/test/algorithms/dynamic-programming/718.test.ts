import { describe, expect, it } from 'vitest'
import { findLength } from '../../../src/algorithms/dynamic-programming/718'

describe('findLength', () => {
  it('exported', () => {
    expect(findLength([1,2,3,2,1])).toBe([3,2,1,4,7])
    expect(findLength([0,0,0,0,0])).toBe([0,0,0,0,0])
  })
})
