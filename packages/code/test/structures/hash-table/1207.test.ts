import { describe, expect, it } from 'vitest'
import { uniqueOccurrences } from '../../../src/structures/hash-table/1207'

describe('uniqueOccurrences', () => {
  it('exported', () => {
    expect(uniqueOccurrences([1, 2, 2, 1, 1, 3])).toBeTruthy()
    expect(uniqueOccurrences([1, 2])).toBeFalsy()
    expect(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])).toBeTruthy()
  })
})
