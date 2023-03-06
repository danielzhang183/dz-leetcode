import { describe, expect, it } from 'vitest'
import { totalNQueens } from '../../../src/algorithms/back-tracking/052'

describe('totalNQueens', () => {
  it('exported', () => {
    expect(totalNQueens(4)).toBe(1)
  })
})
