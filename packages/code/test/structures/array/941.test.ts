import { describe, expect, it } from 'vitest'
import { validMountainArray } from '../../../src/structures/array/941'

describe('validMountainArray', () => {
  it('exported', () => {
    expect(validMountainArray([2,1])).toBe([3,5,5])
  })
})
