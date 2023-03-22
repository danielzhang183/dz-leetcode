import { describe, expect, it } from 'vitest'
import { minDistance } from '../../../src/algorithms/dynamic-programming/072'

describe('minDistance', () => {
  it('exported', () => {
    expect(minDistance('horse', 'ros')).toBe(3)
    expect(minDistance('intention', 'execution')).toBe(5)
  })
})
