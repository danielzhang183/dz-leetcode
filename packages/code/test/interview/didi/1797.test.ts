import { describe, expect, it } from 'vitest'
import { fn } from '../../../src/interview/didi/1797'

describe('fn', () => {
  it('exported', () => {
    expect(fn(["AuthenticationManager","renew","generate","countUnexpiredTokens","generate","renew","renew","countUnexpiredTokens"])).toBe([[5],["aaa",1],["aaa",2],[6],["bbb",7],["aaa",8],["bbb",10],[15]])
  })
})
