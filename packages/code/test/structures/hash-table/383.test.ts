import { describe, expect, it } from 'vitest'
import { canConstruct } from '../../../src/structures/hash-table/383'

describe('canConstruct', () => {
  it('exported', () => {
    expect(canConstruct('a', 'b')).toBe(false)
    expect(canConstruct('aa', 'ab')).toBe(false)
    expect(canConstruct('aa', 'aab')).toBe(true)
  })
})
