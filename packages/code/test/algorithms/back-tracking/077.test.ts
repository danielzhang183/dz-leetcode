import { describe, expect, it } from 'vitest'
import { combine } from '../../../src/algorithms/back-tracking/077'

describe('combine', () => {
  it('exported', () => {
    expect(combine(4)).toBe(2)
    expect(combine(1)).toBe(1)
  })
})
