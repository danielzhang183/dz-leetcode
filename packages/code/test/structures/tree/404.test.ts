import { describe, expect, it } from 'vitest'
import { sumOfLeftLeaves } from '../../../src/structures/tree/404'

describe('sumOfLeftLeaves', () => {
  it('exported', () => {
    expect(sumOfLeftLeaves([3, 9, 20, null, null, 15, 7])).toBe([1])
  })
})
