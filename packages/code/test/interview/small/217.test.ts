import { describe, expect, it } from 'vitest'
import { containsDuplicate } from '../../../src/interview/small/217'

describe('containsDuplicate', () => {
  it('exported', () => {
    expect(containsDuplicate([1,2,3,1])).toBe([1,2,3,4])
  })
})
