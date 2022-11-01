import { describe, expect, it } from 'vitest'
import { numDistinct } from '../../../src/algorithms/dynamic-programming/115'

describe('numDistinct', () => {
  it('exported', () => {
    expect(numDistinct('rabbbit')).toBe('rabbit')
    expect(numDistinct('babgbag')).toBe('bag')
  })
})
