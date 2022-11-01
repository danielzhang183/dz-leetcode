import { describe, expect, it } from 'vitest'
import { findContentChildren } from '../../../src/algorithms/greedy/455'

describe('findContentChildren', () => {
  it('exported', () => {
    expect(findContentChildren([1, 2, 3])).toBe([1, 1])
    expect(findContentChildren([1, 2])).toBe([1, 2, 3])
  })
})
