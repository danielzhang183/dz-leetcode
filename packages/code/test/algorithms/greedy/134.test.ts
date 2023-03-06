import { describe, expect, it } from 'vitest'
import { canCompleteCircuit } from '../../../src/algorithms/greedy/134'

describe('canCompleteCircuit', () => {
  it('exported', () => {
    expect(canCompleteCircuit([1,2,3,4,5])).toBe([3,4,5,1,2])
    expect(canCompleteCircuit([2,3,4])).toBe([3,4,3])
  })
})
