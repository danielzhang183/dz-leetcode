import { describe, expect, it } from 'vitest'
import { canConstruct } from '../../../src/structures/hash-table/383'

describe('canConstruct', () => {
  it('exported', () => {
    expect(canConstruct('a')).toBe('b')
    expect(canConstruct('aa')).toBe('ab')
    expect(canConstruct('aa')).toBe('aab')
  })
})
