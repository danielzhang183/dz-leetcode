import { describe, expect, it } from 'vitest'
import { isSubsequence } from '../../../src/algorithms/dynamic-programming/392'

describe('isSubsequence', () => {
  it('exported', () => {
    expect(isSubsequence('abc', 'ahbgdc')).toBe(true)
    expect(isSubsequence('axc', 'ahbgdc')).toBe(false)
  })
})
