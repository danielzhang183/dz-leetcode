import { describe, expect, it } from 'vitest'
import { fn } from '../../../src/interview/bytedance/1472'

describe('fn', () => {
  it('exported', () => {
    expect(fn(["BrowserHistory","visit","visit","visit","back","back","forward","visit","forward","back","back"])).toBe([["leetcode.com"],["google.com"],["facebook.com"],["youtube.com"],[1],[1],[1],["linkedin.com"],[2],[2],[7]])
  })
})
