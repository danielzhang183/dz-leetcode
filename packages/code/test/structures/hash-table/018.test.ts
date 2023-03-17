import { describe, expect, it } from 'vitest'
import { fourSum } from '../../../src/structures/hash-table/018'

describe('fourSum', () => {
  it('exported', () => {
    expect(fourSum([1, 0, -1, 0, -2, 2], 0)).toBe([[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]])
    expect(fourSum([2, 2, 2, 2, 2], 8)).toBe([[2, 2, 2, 2]])
  })
})
