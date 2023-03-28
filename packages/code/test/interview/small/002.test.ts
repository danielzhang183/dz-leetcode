import { describe, expect, it } from 'vitest'
import { addTwoNumbers } from '../../../src/interview/small/002'

describe('addTwoNumbers', () => {
  it('exported', () => {
    expect(addTwoNumbers([2,4,3])).toBe([5,6,4])
    expect(addTwoNumbers([0])).toBe([0])
    expect(addTwoNumbers([9,9,9,9,9,9,9])).toBe([9,9,9,9])
  })
})
