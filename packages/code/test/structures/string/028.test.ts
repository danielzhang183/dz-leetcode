import { describe, expect, it } from 'vitest'
import { strStr } from '../../../src/structures/string/028'

describe('strStr', () => {
  it('exported', () => {
    expect(strStr('sadbutsad', 'sad')).toBe(0)
    expect(strStr('leetcode', 'leeto')).toBe(-1)
    expect(strStr('abc', 'c')).toBe(2)
  })
})
