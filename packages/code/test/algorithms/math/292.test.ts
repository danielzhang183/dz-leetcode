import { describe, expect, it } from 'vitest'
import { canWinNim } from '../../../src/algorithms/math/292'

describe('canWinNim', () => {
  it('exported', () => {
    expect(canWinNim(4)).toBe(1)
  })
})
