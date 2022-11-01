import { describe, expect, it } from 'vitest'
import { flatten } from '../../../src/structures/tree/114'

describe('flatten', () => {
  it('exported', () => {
    expect(flatten([1, 2, 5, 3, 4, null, 6])).toBe([])
  })
})
