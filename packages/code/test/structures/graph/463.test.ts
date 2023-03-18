import { describe, expect, it } from 'vitest'
import { islandPerimeter } from '../../../src/structures/graph/463'

describe('islandPerimeter', () => {
  it('exported', () => {
    expect(islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]])).toBe(16)
    expect(islandPerimeter([[1]])).toBe(4)
    expect(islandPerimeter([[1, 0]])).toBe(4)
  })
})
