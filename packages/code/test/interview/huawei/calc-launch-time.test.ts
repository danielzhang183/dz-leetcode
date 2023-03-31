import { describe, expect, it } from 'vitest'
import { calcLaunchTime } from '../../../src/interview/huawei/calc-launch-time'

describe('calcLaunchTime', () => {
  it('exported', () => {
    expect(calcLaunchTime([
      [1, 0, 0],
      [1, 2, 0],
      [0, 1, 3],
    ], 3)).toBe(6)
    expect(calcLaunchTime([
      [1, 0, 0, 0],
      [1, 2, 0, 0],
      [1, 1, 3, 0],
      [0, 0, 1, 4],
    ], 4)).toBe(10)
    expect(calcLaunchTime([
      [1, 0, 0, 0],
      [1, 2, 0, 0],
      [1, 0, 3, 0],
      [0, 1, 1, 4],
    ], 4)).toBe(8)
    expect(calcLaunchTime([
      [1, 0, 0, 0, 0, 0, 0, 0],
      [0, 2, 0, 0, 0, 0, 0, 0],
      [1, 1, 3, 0, 0, 0, 0, 0],
      [0, 0, 1, 4, 0, 0, 0, 0],
      [0, 0, 0, 1, 5, 0, 0, 0],
      [0, 0, 0, 1, 0, 6, 0, 0],
      [0, 0, 0, 0, 1, 1, 7, 0],
      [0, 0, 0, 0, 0, 0, 1, 8],
    ], 8)).toBe(30)
  })
})
