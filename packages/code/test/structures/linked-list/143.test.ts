import { describe, expect, it } from 'vitest'
import { reorderList } from '../../../src/structures/linked-list/143'

describe('reorderList', () => {
  it('exported', () => {
    expect(reorderList([1,2,3,4])).toBe([1,2,3,4,5])
  })
})
