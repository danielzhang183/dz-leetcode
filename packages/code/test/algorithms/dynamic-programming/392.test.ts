import { describe, expect, it } from 'vitest'
import { isSubsequence } from '../../../src/algorithms/dynamic-programming/392'

describe('isSubsequence', () => {
  it('exported', () => {
    expect(isSubsequence('abc')).toBe('ahbgdc')
    expect(isSubsequence('axc')).toBe('ahbgdc')
  })
})
