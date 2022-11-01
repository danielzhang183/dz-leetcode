import { describe, expect, it } from 'vitest'
import { recoverTree } from '../../../src/structures/tree/099'

describe('recoverTree', () => {
  it('exported', () => {
    expect(recoverTree([1, 3, null, null, 2])).toBe([3, 1, 4, null, null, 2])
  })
})
