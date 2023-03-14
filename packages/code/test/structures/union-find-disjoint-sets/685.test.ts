import { describe, expect, it } from 'vitest'
import { findRedundantDirectedConnection } from '../../../src/structures/union-find-disjoint-sets/685'

describe('findRedundantDirectedConnection', () => {
  it('exported', () => {
    expect(findRedundantDirectedConnection([[1, 2], [1, 3], [2, 3]])).toBe([[1, 2], [2, 3], [3, 4], [4, 1], [1, 5]])
  })
})
