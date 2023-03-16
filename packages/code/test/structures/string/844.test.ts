import { describe, expect, it } from 'vitest'
import { backspaceCompare } from '../../../src/structures/string/844'

describe('backspaceCompare', () => {
  it('exported', () => {
    expect(backspaceCompare('ab#c', 'ad#c')).toBe(true)
    expect(backspaceCompare('ab##', 'c#d#')).toBe(true)
    expect(backspaceCompare('a#c', 'b')).toBe(false)
    expect(backspaceCompare('bxj##tw', 'bxj###tw')).toBe(false)
  })
})
