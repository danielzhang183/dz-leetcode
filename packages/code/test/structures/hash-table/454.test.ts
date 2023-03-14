import { describe, expect, it } from 'vitest'
import { fourSumCount } from '../../../src/structures/hash-table/454'

describe('fourSumCount', () => {
  it('exported', () => {
    expect(fourSumCount([1, 2])).toBe([-2, -1])
    expect(fourSumCount([-1, 2])).toBe([0, 2])
    expect(fourSumCount([0])).toBe([0])
    expect(fourSumCount([0])).toBe([0])
  })
})
