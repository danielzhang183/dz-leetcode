import { describe, expect, it } from 'vitest'
import { uniquePaths } from '../../../src/algorithms/dynamic-programming/062'

describe('uniquePaths', () => {
  it('exported', () => {
    expect(uniquePaths(2, 2)).toBe(2)
    expect(uniquePaths(2, 3)).toBe(3)
    expect(uniquePaths(2, 4)).toBe(4)
    expect(uniquePaths(3, 2)).toBe(3)
    expect(uniquePaths(3, 3)).toBe(6)
    expect(uniquePaths(3, 4)).toBe(10)
    expect(uniquePaths(3, 7)).toBe(28)
  })
})
