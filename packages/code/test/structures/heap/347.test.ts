import { describe, expect, it } from 'vitest'
import { topKFrequent } from '../../../src/structures/heap/347'

describe('topKFrequent', () => {
  it('exported', () => {
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toStrictEqual([1, 2])
    expect(topKFrequent([1], 1)).toStrictEqual([1])
  })
})
