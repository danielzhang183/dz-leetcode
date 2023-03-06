import { describe, expect, it } from 'vitest'
import { sortArrayByParityII } from '../../../src/structures/array/922'

describe('sortArrayByParityII', () => {
  it('exported', () => {
    expect(sortArrayByParityII([4,2,5,7])).toBe([2,3])
  })
})
