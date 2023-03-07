import { describe, expect, it } from 'vitest'
import { topKFrequent } from '../../../src/structures/queue/347'

describe('topKFrequent', () => {
  it('exported', () => {
    expect(topKFrequent([1,1,1,2,2,3])).toBe(2)
    expect(topKFrequent([1])).toBe(1)
  })
})
