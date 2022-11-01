import { describe, expect, it } from 'vitest'
import { fib } from '../../../src/algorithms/dynamic-programming/509'

describe('fib', () => {
  it('exported', () => {
    expect(fib(2)).toBe(3)
  })
})
