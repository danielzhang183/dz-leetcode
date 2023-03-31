import { describe, expect, it } from 'vitest'
import { isLongPressedName } from '../../../src/structures/string/925'

describe('isLongPressedName', () => {
  it('exported', () => {
    expect(isLongPressedName('alex', 'aaleex')).toBeTruthy()
    expect(isLongPressedName('saeed', 'ssaaedd')).toBeFalsy()
    expect(isLongPressedName('alex', 'aaleexa')).toBeFalsy()
  })
})
