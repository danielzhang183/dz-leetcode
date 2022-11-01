import { describe, expect, it } from 'vitest'
import { uniquePaths } from '../../../src/algorithms/dynamic-programming/062'

describe('uniquePaths', () => {
  it('exported', () => {
    expect(uniquePaths(3)).toBe(7)
    expect(uniquePaths(3)).toBe(2)
  })
})
