import { describe, expect, it } from 'vitest'
import { dailyTemperatures } from '../../../src/structures/monotone-stack/739'

describe('dailyTemperatures', () => {
  it('exported', () => {
    expect(dailyTemperatures([73,74,75,71,69,72,76,73])).toBe([30,40,50,60])
  })
})
