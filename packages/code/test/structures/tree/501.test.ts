import { describe, expect, it } from 'vitest'
import { findMode } from '../../../src/structures/tree/501'

describe('findMode', () => {
  it('exported', () => {
    expect(findMode([1,null,2,2])).toBe([0])
  })
})
