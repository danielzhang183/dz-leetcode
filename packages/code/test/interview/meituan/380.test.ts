import { describe, expect, it } from 'vitest'
import { RandomizedSet } from '../../../src/interview/meituan/380'

describe('RandomizedSet', () => {
  it('exported', () => {
    const randomizedSet = new RandomizedSet()
    expect(randomizedSet.insert(1)).toBeTruthy() // Inserts 1 to the set. Returns true as 1 was inserted successfully.
    expect(randomizedSet.remove(2)).toBeFalsy() // Returns false as 2 does not exist in the set.
    expect(randomizedSet.insert(2)).toBeTruthy() // Inserts 2 to the set, returns true. Set now contains [1,2].
    expect(randomizedSet.getRandom())
      .toSatisfy((value: number) => [1, 2].includes(value))// getRandom() should return either 1 or 2 randomly.
    expect(randomizedSet.remove(1)).toBeTruthy() // Removes 1 from the set, returns true. Set now contains [2].
    expect(randomizedSet.insert(2)).toBeFalsy() // 2 was already in the set, so return false.
    expect(randomizedSet.getRandom()).toBe(2)// Since 2 is the only number in the set, getRandom() will always return 2.
  })
})
