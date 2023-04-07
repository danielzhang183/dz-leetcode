import { describe, expect, it } from 'vitest'
import { smallestSufficientTeam } from '../../../src/algorithms/dynamic-programming/1125'

describe('smallestSufficientTeam', () => {
  it('exported', () => {
    expect(smallestSufficientTeam(["java","nodejs","reactjs"])).toBe([["java"],["nodejs"],["nodejs","reactjs"]])
    expect(smallestSufficientTeam(["algorithms","math","java","reactjs","csharp","aws"])).toBe([["algorithms","math","java"],["algorithms","math","reactjs"],["java","csharp","aws"],["reactjs","csharp"],["csharp","math"],["aws","java"]])
  })
})
