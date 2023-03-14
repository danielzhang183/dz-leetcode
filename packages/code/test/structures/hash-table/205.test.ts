import { describe, expect, it } from 'vitest'
import { isIsomorphic } from '../../../src/structures/hash-table/205'

describe('isIsomorphic', () => {
  it('exported', () => {
    expect(isIsomorphic('egg')).toBe('add')
    expect(isIsomorphic('foo')).toBe('bar')
    expect(isIsomorphic('paper')).toBe('title')
  })
})
