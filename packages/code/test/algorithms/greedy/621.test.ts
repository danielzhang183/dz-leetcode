import { describe, expect, it } from 'vitest'
import { leastInterval } from '../../../src/algorithms/greedy/621'

describe('leastInterval', () => {
  it('exported', () => {
    expect(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'])).toBe(2)
    expect(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'])).toBe(0)
    expect(leastInterval(['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'])).toBe(2)
  })
})
