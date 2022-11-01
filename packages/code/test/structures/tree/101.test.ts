import { describe, expect, it } from 'vitest'
import { isSymmetric } from '../../../src/structures/tree/101'

describe('isSymmetric', () => {
  it('exported', () => {
    expect(isSymmetric([1, 2, 2, 3, 4, 4, 3])).toBe([1, 2, 2, null, 3, null, 3])
  })
})
