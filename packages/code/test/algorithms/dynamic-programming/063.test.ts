import { describe, expect, it } from 'vitest'
import { uniquePathsWithObstacles } from '../../../src/algorithms/dynamic-programming/063'

describe('uniquePathsWithObstacles', () => {
  it('exported', () => {
    expect(uniquePathsWithObstacles([[0, 0]])).toBe(1)
    expect(uniquePathsWithObstacles([[0, 1], [0, 0]])).toBe(1)
    expect(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]])).toBe(2)
  })
})
