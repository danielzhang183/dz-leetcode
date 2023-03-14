import { describe, expect, it } from 'vitest'
import { backspaceCompare } from '../../../src/structures/string/844'

describe('backspaceCompare', () => {
  it('exported', () => {
    expect(backspaceCompare('ab#c')).toBe('ad#c')
    expect(backspaceCompare('ab##')).toBe('c#d#')
    expect(backspaceCompare('a#c')).toBe('b')
  })
})
