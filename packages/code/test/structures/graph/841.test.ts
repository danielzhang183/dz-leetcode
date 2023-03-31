import { describe, expect, it } from 'vitest'
import { canVisitAllRooms } from '../../../src/structures/graph/841'

describe('canVisitAllRooms', () => {
  it('exported', () => {
    expect(canVisitAllRooms([[1], [2], [3], []])).toBeTruthy()
    expect(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]])).toBeFalsy()
  })
})
