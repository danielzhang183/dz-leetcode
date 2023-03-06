import { describe, expect, it } from 'vitest'
import { reconstructQueue } from '../../../src/algorithms/greedy/406'

describe('reconstructQueue', () => {
  it('exported', () => {
    expect(reconstructQueue([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]])).toBe([[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]])
  })
})
