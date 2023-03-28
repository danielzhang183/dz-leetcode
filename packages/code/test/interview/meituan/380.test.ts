import { describe, expect, it } from 'vitest'
import { fn } from '../../../src/interview/meituan/380'

describe('fn', () => {
  it('exported', () => {
    expect(fn(["RandomizedSet","insert","remove","insert","getRandom","remove","insert","getRandom"])).toBe([[],[1],[2],[2],[],[1],[2],[]])
  })
})
