import { describe, expect, it } from 'vitest'
import { middleNode } from '../../../src/structures/linked-list/876'

describe('middleNode', () => {
  it('exported', () => {
    expect(middleNode([1, 2, 3, 4, 5])).toBe([1, 2, 3, 4, 5, 6])
  })
})
