import { describe, expect, it } from 'vitest'
import { fn } from '../../../src/interview/ali/933'

describe('fn', () => {
  it('exported', () => {
    expect(fn(["RecentCounter","ping","ping","ping","ping"])).toBe([[],[1],[100],[3001],[3002]])
  })
})
