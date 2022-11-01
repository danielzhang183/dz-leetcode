import { describe, expect, it } from 'vitest'
import { mySqrt } from '../../../src/algorithms/binary-search/069'

describe('mySqrt', () => {
  it('exported', () => {
    expect(mySqrt(4)).toBe(8)
  })
})
