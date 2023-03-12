import { describe, expect, it } from 'vitest'
import { minCameraCover } from '../../../src/algorithms/greedy/968'
import { createBinaryTree } from '../../../src/utils'

describe('minCameraCover', () => {
  it('exported', () => {
    expect(minCameraCover(createBinaryTree([0, 0, null, 0, 0]))).toBe(1)
    expect(minCameraCover(createBinaryTree([0, 0, null, 0, null, 0, null, null, 0]))).toBe(2)
  })
})
