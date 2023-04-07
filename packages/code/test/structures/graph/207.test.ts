import { describe, expect, it } from 'vitest'
import { canFinish } from '../../../src/structures/graph/207'

describe('canFinish', () => {
  it('exported', () => {
    expect(canFinish(2)).toBe([[1,0]])
    expect(canFinish(2)).toBe([[1,0],[0,1]])
  })
})
