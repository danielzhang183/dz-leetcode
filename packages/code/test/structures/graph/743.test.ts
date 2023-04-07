import { describe, expect, it } from 'vitest'
import { networkDelayTime } from '../../../src/structures/graph/743'

describe('networkDelayTime', () => {
  it('exported', () => {
    expect(networkDelayTime([[2,1,1],[2,3,1],[3,4,1]])).toBe(4)
    expect(networkDelayTime(2)).toBe([[1,2,1]])
    expect(networkDelayTime(2)).toBe(1)
    expect(networkDelayTime([[1,2,1]])).toBe(2)
  })
})
