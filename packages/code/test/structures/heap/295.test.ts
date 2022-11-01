import { describe, expect, it } from 'vitest'
import { fn } from '../../../src/structures/heap/295'

describe('fn', () => {
  it('exported', () => {
    expect(fn(['MedianFinder', 'addNum', 'addNum', 'findMedian', 'addNum', 'findMedian'])).toBe([[], [1], [2], [], [3], []])
  })
})
