import { describe, expect, it } from 'vitest'
import { canFinish } from '../../../src/structures/graph/207'

describe('canFinish', () => {
  it('exported', () => {
    expect(canFinish(2, [[1, 0]])).toBeTruthy()
    expect(canFinish(2, [[1, 0], [0, 1]])).toBeFalsy()
    expect(canFinish(5, [[1, 4], [2, 4], [3, 1], [3, 2]])).toBeTruthy()
  })
})
