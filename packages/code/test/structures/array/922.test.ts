import { describe, expect, it } from 'vitest'
import { sortArrayByParityII } from '../../../src/structures/array/922'

describe('sortArrayByParityII', () => {
  const check = (arr: number[]) => {
    return arr.every((item, index) => index & 1 ? item & 1 : item % 2 === 0)
  }

  it('exported', () => {
    const sorted = sortArrayByParityII([4, 2, 5, 7])
    expect(sorted).toHaveLength(4)
    expect(sorted).toSatisfy(check) // [4,5,2,7] [4,7,2,5], [2,5,4,7], [2,7,4,5] can be accepted
    expect(sortArrayByParityII([2, 3])).toStrictEqual([2, 3])
  })
})
2
