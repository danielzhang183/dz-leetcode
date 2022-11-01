import { describe, expect, it } from 'vitest'
import { intersection } from '../../../src/structures/array/349'

describe('intersection', () => {
  it('exported', () => {
    expect(intersection([1, 2, 2, 1])).toBe([2, 2])
    expect(intersection([4, 9, 5])).toBe([9, 4, 9, 8, 4])
  })
})
