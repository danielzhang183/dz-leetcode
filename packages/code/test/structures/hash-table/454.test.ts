import { describe, expect, it } from 'vitest'
import { fourSumCount } from '../../../src/structures/hash-table/454'

describe('fourSumCount', () => {
  it('exported', () => {
    expect(fourSumCount([1, 2],[-2, -1], [-1, 2], [0, 2])).toBe(2)
    expect(fourSumCount([0], [0], [0], [0])).toBe(1)
  })
})
