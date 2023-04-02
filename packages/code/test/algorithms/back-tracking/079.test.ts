import { describe, expect, it } from 'vitest'
import { exist } from '../../../src/algorithms/back-tracking/079'

describe('exist', () => {
  const createMatrix = () => [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ]
  it('ABCCED', () => expect(exist(createMatrix(), 'ABCCED')).toBe(true))
  it('SEE', () => expect(exist(createMatrix(), 'SEE')).toBe(true))
  it('ABCB', () => expect(exist(createMatrix(), 'ABCB')).toBe(false))
})
