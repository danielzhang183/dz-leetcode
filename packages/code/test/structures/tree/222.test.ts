import { describe, expect, it } from 'vitest'
import { countNodes } from '../../../src/structures/tree/222'

describe('countNodes', () => {
  it('exported', () => {
    expect(countNodes([1, 2, 3, 4, 5, 6])).toBe([])
  })
})
