import { describe, expect, it } from 'vitest'
import { findRedundantConnection } from '../../../src/structures/union-find-disjoint-sets/684'

describe('findRedundantConnection', () => {
  it('exported', () => {
    expect(findRedundantConnection([[1, 2], [1, 3], [2, 3]])).toStrictEqual([2, 3])
    expect(findRedundantConnection([[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]])).toStrictEqual([1, 4])
  })
})
