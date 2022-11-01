import { describe, expect, it } from 'vitest'
import { exist } from '../../../src/algorithms/back-tracking/079'

describe('exist', () => {
  it('exported', () => {
    expect(exist([['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']])).toBe('ABCCED')
    expect(exist([['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']])).toBe('SEE')
    expect(exist([['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']])).toBe('ABCB')
  })
})
