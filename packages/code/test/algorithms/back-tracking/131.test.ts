import { describe, expect, it } from 'vitest'
import { partition } from '../../../src/algorithms/back-tracking/131'

describe('partition', () => {
  it('exported', () => {
    expect(partition('aab')).toStrictEqual([['a', 'a', 'b'], ['aa', 'b']])
    expect(partition('a')).toStrictEqual([['a']])
  })
})
