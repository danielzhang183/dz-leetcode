import { describe, expect, it } from 'vitest'
import { countSubstrings } from '../../../src/algorithms/dynamic-programming/647'

describe('countSubstrings', () => {
  it('exported', () => {
    expect(countSubstrings("abc")).toBe("aaa")
  })
})
