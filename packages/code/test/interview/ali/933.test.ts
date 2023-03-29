import { describe, expect, it } from 'vitest'
import { RecentCounter } from '../../../src/interview/ali/933'

describe('RecentCounter', () => {
  it('exported', () => {
    const rc = new RecentCounter()
    expect(rc.ping(1)).toBe(1)
    expect(rc.range).toStrictEqual([-2999, 1])
    expect(rc.ping(100)).toBe(2)
    expect(rc.range).toStrictEqual([-2900, 100])
    expect(rc.ping(3001)).toBe(3)
    expect(rc.range).toStrictEqual([1, 3001])
    expect(rc.ping(3002)).toBe(3)
    expect(rc.range).toStrictEqual([2, 3002])
  })
})
