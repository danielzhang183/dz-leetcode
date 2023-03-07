import { describe, expect, it } from 'vitest'
import { rob } from '../../../src/algorithms/dynamic-programming/213'

describe('rob', () => {
  it('exported', () => {
    expect(rob([2,3,2])).toBe([1,2,3,1])
  })
})
