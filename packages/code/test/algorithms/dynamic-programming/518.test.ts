import { describe, expect, it } from 'vitest'
import { change } from '../../../src/algorithms/dynamic-programming/518'

describe('change', () => {
  it('exported', () => {
    expect(change(5)).toBe([1, 2, 5])
    expect(change(3)).toBe([2])
    expect(change(10)).toBe([10])
  })
})
