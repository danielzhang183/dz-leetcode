import { describe, expect, it } from 'vitest'
import { mergeTrees } from '../../../src/structures/tree/617'

describe('mergeTrees', () => {
  it('exported', () => {
    expect(mergeTrees([1, 3, 2, 5])).toBe([2, 1, 3, null, 4, null, 7])
    expect(mergeTrees([1])).toBe([1, 2])
  })
})
