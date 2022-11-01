import { describe, expect, it } from 'vitest'
import { subsets } from '../../../src/algorithms/back-tracking/078'

describe('subsets', () => {
  it('exported', () => {
    expect(subsets([1, 2, 3])).toBe([0])
  })
})
