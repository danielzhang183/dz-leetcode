import { describe, expect, it } from 'vitest'
import { totalNQueens } from '../../../src/algorithms/back-tracking/052'

describe('totalNQueens', () => {
  it('exported', () => {
    expect(totalNQueens(4)).toBe(2)
    expect(totalNQueens(1)).toBe(1)
  })
})
