import { describe, expect, it } from 'vitest'
import { numIslands } from '../../../src/structures/graph/200'

describe('numIslands', () => {
  it('exported', () => {
    expect(numIslands([
      ['1', '1', '1', '1', '0'],
      ['1', '1', '0', '1', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '0', '0', '0'],
    ])).toBe(1)

    expect(numIslands([
      ['1', '1', '0', '0', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '1', '0', '0'],
      ['0', '0', '0', '1', '1'],
    ])).toBe(3)
  })
})
