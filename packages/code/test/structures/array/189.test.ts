import { describe, expect, it } from 'vitest'
import { rotate } from '../../../src/structures/array/189'

describe('rotate', () => {
  it('[1, 2, 3, 4, 5, 6, 7]', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7]
    rotate(arr, 3)
    expect(arr).toStrictEqual([5, 6, 7, 1, 2, 3, 4])
  })

  it('[-1, -100, 3, 99]', () => {
    const arr = [-1, -100, 3, 99]
    rotate(arr, 2)
    expect(arr).toStrictEqual([3, 99, -1, -100])
  })
})
