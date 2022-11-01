import { describe, expect, it } from 'vitest'
import { binaryTreePaths } from '../../../src/structures/tree/257'

describe('binaryTreePaths', () => {
  it('exported', () => {
    expect(binaryTreePaths([1, 2, 3, null, 5])).toBe([1])
  })
})
