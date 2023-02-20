import { describe, expect, it } from 'vitest'
import { removeDuplicates } from '../../../src/structures/array/026'

describe('removeDuplicates', () => {
  it('exported', () => {
    const src = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
    const len = removeDuplicates(src)
    expect([0, 1, 2, 3, 4]).toStrictEqual(src.slice(0, len))
  })
})
