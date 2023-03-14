import { describe, expect, it } from 'vitest'
import { balanceBST } from '../../../src/structures/tree/1382'

describe('balanceBST', () => {
  it('exported', () => {
    expect(balanceBST([1, null, 2, null, 3, null, 4])).toBe([2, 1, 3])
  })
})
