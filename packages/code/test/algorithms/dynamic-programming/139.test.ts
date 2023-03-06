import { describe, expect, it } from 'vitest'
import { wordBreak } from '../../../src/algorithms/dynamic-programming/139'

describe('wordBreak', () => {
  it('exported', () => {
    expect(wordBreak("leetcode")).toBe(["leet","code"])
    expect(wordBreak("applepenapple")).toBe(["apple","pen"])
    expect(wordBreak("catsandog")).toBe(["cats","dog","sand","and","cat"])
  })
})
