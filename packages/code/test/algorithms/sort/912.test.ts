import { describe, expect, it } from 'vitest'
import { sortArray } from '../../../src/algorithms/sort/912'

describe('sortArray', () => {
  it('exported', () => {
    expect(sortArray([5, 2, 3, 1])).toStrictEqual([1, 2, 3, 5])
    // expect(sortArray([5, 1, 1, 2, 0, 0])).toStrictEqual([0, 0, 1, 1, 2, 5])
  })
})
