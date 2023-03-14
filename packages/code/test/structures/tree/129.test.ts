import { describe, expect, it } from 'vitest'
import { sumNumbers } from '../../../src/structures/tree/129'

describe('sumNumbers', () => {
  it('exported', () => {
    expect(sumNumbers([1, 2, 3])).toBe([4, 9, 0, 5, 1])
  })
})
