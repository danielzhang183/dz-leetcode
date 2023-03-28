import { describe, expect, it } from 'vitest'
import { fn } from '../../../src/interview/netease/384'

describe('fn', () => {
  it('exported', () => {
    expect(fn(["Solution","shuffle","reset","shuffle"])).toBe([[[1,2,3]],[],[],[]])
  })
})
