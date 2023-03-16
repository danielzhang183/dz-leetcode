import { describe, expect, it } from 'vitest'
import { isLongPressedName } from '../../../src/structures/string/925'

describe('isLongPressedName', () => {
  it('exported', () => {
    expect(isLongPressedName('alex', 'aaleex')).toBe(true)
    expect(isLongPressedName('saeed', 'ssaaedd')).toBe(false)
    expect(isLongPressedName('alex', 'aaleexa')).toBe(false)
  })
})
