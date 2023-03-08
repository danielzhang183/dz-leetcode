import { describe, expect, it } from 'vitest'
import { buildTree } from '../../../src/structures/tree/106'

describe('buildTree', () => {
  it('exported', () => {
    expect(buildTree([9,3,15,20,7])).toBe([9,15,7,20,3])
    expect(buildTree([-1])).toBe([-1])
  })
})
