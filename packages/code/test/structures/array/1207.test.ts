import { describe, expect, it } from 'vitest'
import { uniqueOccurrences } from '../../../src/structures/array/1207'

describe('uniqueOccurrences', () => {
  it('exported', () => {
    expect(uniqueOccurrences([1,2,2,1,1,3])).toBe([1,2])
  })
})
