import { describe, expect, it } from 'vitest'
import { permute } from '../../../src/algorithms/back-tracking/046'

describe('permute', () => {
  it('exported', () => {
    expect(permute([1, 2, 3])).toBe([0, 1])
  })
})
