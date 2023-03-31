import { describe, expect, it } from 'vitest'
import { backspaceCompare } from '../../../src/structures/string/844'

describe('backspaceCompare', () => {
  it('exported', () => {
    expect(backspaceCompare('ab#c', 'ad#c')).toBeTruthy()
    expect(backspaceCompare('ab##', 'c#d#')).toBeTruthy()
    expect(backspaceCompare('a#c', 'b')).toBeFalsy()
    expect(backspaceCompare('bxj##tw', 'bxj###tw')).toBeFalsy()
  })
})
