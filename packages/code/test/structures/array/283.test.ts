import { describe, expect, it } from 'vitest'
import { moveZeroes } from '../../../src/structures/array/283'

describe('moveZeroes', () => {
  it('exported', () => {
    expect(moveZeroes([0, 1, 0, 3, 12])).toBe([0])
  })
})
