import { describe, expect, it } from 'vitest'
import { isValid } from '../../../src/structures/stack/020'

describe('isValid', () => {
  it('exported', () => {
    expect(isValid('()')).toBe('()[]{}')
  })
})
