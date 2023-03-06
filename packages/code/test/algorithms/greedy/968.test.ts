import { describe, expect, it } from 'vitest'
import { minCameraCover } from '../../../src/algorithms/greedy/968'

describe('minCameraCover', () => {
  it('exported', () => {
    expect(minCameraCover([0,0,null,0,0])).toBe([0,0,null,0,null,0,null,null,0])
  })
})
