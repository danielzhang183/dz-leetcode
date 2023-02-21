import { describe, expect, it } from 'vitest'
import { simplifyPath } from '../../../src/structures/stack/071'

describe('simplifyPath', () => {
  it('exported', () => {
    expect(simplifyPath('/home/')).toBe('/home')
    expect(simplifyPath('/../')).toBe('/')
    expect(simplifyPath('/home//foo/')).toBe('/home/foo')
    expect(simplifyPath('/a/./b/../../c/')).toBe('/c')
  })
})
