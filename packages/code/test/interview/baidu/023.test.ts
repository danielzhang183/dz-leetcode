import { describe, expect, it } from 'vitest'
import { mergeKLists } from '../../../src/interview/baidu/023'

describe('mergeKLists', () => {
  it('exported', () => {
    expect(mergeKLists([[1,4,5],[1,3,4],[2,6]])).toBe([])
  })
})
