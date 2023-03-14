import { describe, expect, it } from 'vitest'
import { isValid } from '../../../src/structures/queue/020'

describe('isValid', () => {
  it('exported', () => {
    expect(isValid('()')).toBe('()[]{}')
  })
})
