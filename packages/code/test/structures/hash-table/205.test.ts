import { describe, expect, it } from 'vitest'
import { isIsomorphic } from '../../../src/structures/hash-table/205'

describe('isIsomorphic', () => {
  it('exported', () => {
    expect(isIsomorphic('egg', 'add')).toBeTruthy()
    expect(isIsomorphic('foo', 'bar')).toBeFalsy()
    expect(isIsomorphic('paper', 'title')).toBeTruthy()
  })
})
