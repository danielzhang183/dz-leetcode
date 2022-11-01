import { describe, expect, it } from 'vitest'
import { minDistance } from '../../../src/algorithms/dynamic-programming/072'

describe('minDistance', () => {
  it('exported', () => {
    expect(minDistance('horse')).toBe('ros')
    expect(minDistance('intention')).toBe('execution')
  })
})
