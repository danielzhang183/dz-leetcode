import { describe, expect, it } from 'vitest'
import { subsetsWithDup } from '../../../src/algorithms/back-tracking/090'

describe('subsetsWithDup', () => {
  it('exported', () => {
    expect(subsetsWithDup([1,2,2])).toBe([0])
  })
})
