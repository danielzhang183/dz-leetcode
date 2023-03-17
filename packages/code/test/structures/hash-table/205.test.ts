import { describe, expect, it } from 'vitest'
import { isIsomorphic } from '../../../src/structures/hash-table/205'

describe('isIsomorphic', () => {
  it('exported', () => {
    expect(isIsomorphic('egg', 'add')).toBe(true)
    expect(isIsomorphic('foo', 'bar')).toBe(false)
    expect(isIsomorphic('paper', 'title')).toBe(true)
  })
})
