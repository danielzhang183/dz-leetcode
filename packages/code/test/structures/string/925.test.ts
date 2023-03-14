import { describe, expect, it } from 'vitest'
import { isLongPressedName } from '../../../src/structures/string/925'

describe('isLongPressedName', () => {
  it('exported', () => {
    expect(isLongPressedName('alex')).toBe('aaleex')
    expect(isLongPressedName('saeed')).toBe('ssaaedd')
  })
})
