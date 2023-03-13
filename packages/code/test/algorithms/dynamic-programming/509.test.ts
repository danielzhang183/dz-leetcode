import { describe, expect, it } from 'vitest'
import { fib } from '../../../src/algorithms/dynamic-programming/509'

describe('fib', () => {
  it('exported', () => {
    expect(fib(0)).toBe(0)
    expect(fib(1)).toBe(1)
    expect(fib(2)).toBe(1)
    expect(fib(3)).toBe(2)
    expect(fib(4)).toBe(3)
  })
})
