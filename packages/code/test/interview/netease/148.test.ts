import { describe, expect, it } from 'vitest'
import { sortList } from '../../../src/interview/netease/148'

describe('sortList', () => {
  it('exported', () => {
    expect(sortList([4, 2, 1, 3])).toBe([-1, 5, 3, 4, 0])
  })
})
