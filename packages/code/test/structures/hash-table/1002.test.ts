import { describe, expect, it } from 'vitest'
import { commonChars } from '../../../src/structures/hash-table/1002'

describe('commonChars', () => {
  it('exported', () => {
    expect(commonChars(['bella', 'label', 'roller'])).toStrictEqual(['e', 'l', 'l'])
    expect(commonChars(['cool', 'lock', 'cook'])).toStrictEqual(['c', 'o'])
  })
})
