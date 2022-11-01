import { describe, expect, it } from 'vitest'
import { simplifyPath } from '../../../src/structures/stack/071'

describe('simplifyPath', () => {
  it('exported', () => {
    expect(simplifyPath('/home/')).toBe('/../')
  })
})
