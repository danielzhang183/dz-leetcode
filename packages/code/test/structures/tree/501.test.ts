import { describe, expect, it } from 'vitest'
import { findMode } from '../../../src/structures/tree/501'
import { createBinaryTree } from '../../../src/utils'

describe('findMode', () => {
  it('exported', () => {
    expect(findMode(createBinaryTree([1, null, 2, 2]))).toStrictEqual([2])
    expect(findMode(createBinaryTree([0]))).toStrictEqual([0])
  })
})
