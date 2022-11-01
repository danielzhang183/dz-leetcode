import { describe, expect, it } from 'vitest'
import { averageOfLevels } from '../../../src/structures/tree/637'

describe('averageOfLevels', () => {
  it('exported', () => {
    expect(averageOfLevels([3, 9, 20, null, null, 15, 7])).toBe([3, 9, 20, 15, 7])
  })
})
