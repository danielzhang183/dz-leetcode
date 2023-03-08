import { describe, expect, it } from 'vitest'
import { findBottomLeftValue } from '../../../src/structures/tree/513'

describe('findBottomLeftValue', () => {
  it('exported', () => {
    expect(findBottomLeftValue([2,1,3])).toBe([1,2,3,4,null,5,6,null,null,7])
  })
})
