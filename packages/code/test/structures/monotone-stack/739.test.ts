import { describe, expect, it } from 'vitest'
import { dailyTemperatures } from '../../../src/structures/monotone-stack/739'

describe('dailyTemperatures', () => {
  it('exported', () => {
    expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toStrictEqual([1, 1, 4, 2, 1, 1, 0, 0])
    expect(dailyTemperatures([30, 40, 50, 60])).toStrictEqual([1, 1, 1, 0])
    expect(dailyTemperatures([30, 60, 90])).toStrictEqual([1, 1, 0])
  })
})
