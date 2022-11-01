import { describe, expect, it } from 'vitest'
import { removeDuplicates } from '../../../src/structures/array/026'

describe('removeDuplicates', () => {
  it('exported', () => {
    expect(removeDuplicates([1, 1, 2])).toBe([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
  })
})
