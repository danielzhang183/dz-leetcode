import { describe, expect, it } from 'vitest'
import { solveNQueens } from '../../../src/algorithms/back-tracking/051'

describe('solveNQueens', () => {
  it('exported', () => {
    expect(solveNQueens(4)).toBe(1)
  })
})
