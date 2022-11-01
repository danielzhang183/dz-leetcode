import { describe, expect, it } from 'vitest'
import { invertTree } from '../../../src/structures/tree/226'

describe('invertTree', () => {
  it('exported', () => {
    expect(invertTree([4, 2, 7, 1, 3, 6, 9])).toBe([2, 1, 3])
  })
})
