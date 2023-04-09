import { describe, expect, it } from 'vitest'
import { LRUCache } from '../../../src/structures/linked-list/146'

describe('LRUCache', () => {
  it('exported', () => {
    const lRUCache = new LRUCache(2)
    lRUCache.put(1, 1) // cache is {1=1}
    expect(lRUCache.entries).toBe('{1=1}')
    lRUCache.put(2, 2) // cache is {1=1, 2=2}
    expect(lRUCache.entries).toBe('{2=2, 1=1}')
    expect(lRUCache.get(1)).toBe(1) // return 1
    expect(lRUCache.entries).toBe('{1=1, 2=2}')
    lRUCache.put(3, 3) // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
    expect(lRUCache.entries).toBe('{3=3, 1=1}')
    expect(lRUCache.get(2)).toBe(-1) // returns -1 (not found)
    lRUCache.put(4, 4) // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
    expect(lRUCache.entries).toBe('{4=4, 3=3}')
    expect(lRUCache.get(1)).toBe(-1) // return -1 (not found)
    expect(lRUCache.get(3)).toBe(3) // return 3
    expect(lRUCache.get(4)).toBe(4) // return 4
  })

  it('exported1', () => {
    const lRUCache = new LRUCache(2)
    lRUCache.put(1, 0)
    expect(lRUCache.entries).toBe('{1=0}')
    lRUCache.put(2, 2)
    expect(lRUCache.entries).toBe('{2=2, 1=0}')
    expect(lRUCache.get(1)).toBe(0)
    lRUCache.put(3, 3)
    expect(lRUCache.entries).toBe('{3=3, 1=0}')
    expect(lRUCache.get(2)).toBe(-1)
    lRUCache.put(4, 4)
    expect(lRUCache.entries).toBe('{4=4, 3=3}')
    expect(lRUCache.get(1)).toBe(-1)
    expect(lRUCache.get(3)).toBe(3)
    expect(lRUCache.get(4)).toBe(4)
  })
})
