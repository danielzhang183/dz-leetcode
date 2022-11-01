import { describe, expect, it } from 'vitest'
import { isSameTree } from '../../../src/structures/tree/100'

describe('isSameTree', () => {
  it('exported', () => {
    expect(isSameTree([1, 2, 3])).toBe([1, 2, 3])
    expect(isSameTree([1, 2])).toBe([1, null, 2])
    expect(isSameTree([1, 2, 1])).toBe([1, 1, 2])
  })
})
