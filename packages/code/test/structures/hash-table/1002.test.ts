import { describe, expect, it } from 'vitest'
import { commonChars } from '../../../src/structures/hash-table/1002'

describe('commonChars', () => {
  it('exported', () => {
    expect(commonChars(['bella', 'label', 'roller'])).toBe(['cool', 'lock', 'cook'])
  })
})
