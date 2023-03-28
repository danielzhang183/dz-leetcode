import { describe, expect, it } from 'vitest'
import { fn } from '../../../src/interview/tencent/341'

describe('fn', () => {
  it('exported', () => {
    expect(fn([[1,1],2,[1,1]])).toBe([1,[4,[6]]])
  })
})
