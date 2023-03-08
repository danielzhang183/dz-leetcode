import { describe, expect, it } from 'vitest'
import { moveZeroes } from '../../../src/structures/array/283'

describe('moveZeroes', () => {
  it('exported', () => {
    const a1 = [0, 1, 0, 3, 12]
    moveZeroes(a1)
    expect(a1).toStrictEqual([1, 3, 12, 0, 0])
    const a2 = [0]
    moveZeroes(a2)
    expect(a2).toStrictEqual([0])
  })
})
