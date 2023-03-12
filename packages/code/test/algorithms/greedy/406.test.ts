import { describe, expect, it } from 'vitest'
import { reconstructQueue } from '../../../src/algorithms/greedy/406'

describe('reconstructQueue', () => {
  it('exported', () => {
    expect(reconstructQueue([[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]))
      .toBe([[5, 0], [7, 0], [5, 2], [6, 1], [4, 4], [7, 1]])
    expect(reconstructQueue([[6, 0], [5, 0], [4, 0], [3, 2], [2, 2], [1, 4]]))
      .toBe([[4, 0], [5, 0], [2, 2], [3, 2], [1, 4], [6, 0]])
    expect(reconstructQueue([[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]))
      .toBe([[5, 0], [7, 0], [5, 2], [6, 1], [4, 4], [7, 1]])
  })
})
