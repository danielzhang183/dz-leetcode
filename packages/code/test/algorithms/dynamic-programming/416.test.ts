import { describe, expect, it } from 'vitest'
import { canPartition } from '../../../src/algorithms/dynamic-programming/416'

describe('canPartition', () => {
  it('exported', () => {
    expect(canPartition([1,5,11,5])).toBe([1,2,3,5])
  })
})
