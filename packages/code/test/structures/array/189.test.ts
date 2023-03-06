import { describe, expect, it } from 'vitest'
import { rotate } from '../../../src/structures/array/189'

describe('rotate', () => {
  it('exported', () => {
    expect(rotate([1,2,3,4,5,6,7])).toBe(3)
    expect(rotate([-1,-100,3,99])).toBe(2)
  })
})
