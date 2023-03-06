import { describe, expect, it } from 'vitest'
import { smallerNumbersThanCurrent } from '../../../src/structures/array/1365'

describe('smallerNumbersThanCurrent', () => {
  it('exported', () => {
    expect(smallerNumbersThanCurrent([8,1,2,2,3])).toBe([6,5,4,8])
  })
})
