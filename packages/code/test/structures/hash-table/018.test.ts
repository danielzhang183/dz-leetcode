import { describe, expect, it } from 'vitest'
import { fourSum } from '../../../src/structures/hash-table/018'

describe('fourSum', () => {
  it('exported', () => {
    expect(fourSum([1,0,-1,0,-2,2])).toBe(0)
    expect(fourSum([2,2,2,2,2])).toBe(8)
  })
})
