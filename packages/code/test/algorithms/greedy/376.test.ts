import { describe, expect, it } from 'vitest'
import { wiggleMaxLength } from '../../../src/algorithms/greedy/376'

describe('wiggleMaxLength', () => {
  it('exported', () => {
    expect(wiggleMaxLength([1,7,4,9,2,5])).toBe([1,17,5,10,13,15,10,5,16,8])
  })
})
