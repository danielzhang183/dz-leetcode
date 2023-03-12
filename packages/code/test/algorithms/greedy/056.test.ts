import { describe, expect, it } from 'vitest'
import { merge } from '../../../src/algorithms/greedy/056'

describe('merge', () => {
  it('exported', () => {
    expect(merge([[1, 3], [2, 6], [8, 10], [15, 18]])).toStrictEqual([[1, 6], [8, 10], [15, 18]])
    expect(merge([[1, 4], [4, 5]])).toStrictEqual([[1, 5]])
  })
})
