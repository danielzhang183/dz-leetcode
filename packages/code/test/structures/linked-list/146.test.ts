import { describe, expect, it } from 'vitest'
import { fn } from '../../../src/structures/linked-list/146'

describe('fn', () => {
  it('exported', () => {
    expect(fn(['LRUCache', 'put', 'put', 'get', 'put', 'get', 'put', 'get', 'get', 'get'])).toBe([[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]])
  })
})
