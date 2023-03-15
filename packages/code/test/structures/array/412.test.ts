import { describe, expect, it } from 'vitest'
import { fizzBuzz } from '../../../src/structures/array/412'

describe('fizzBuzz', () => {
  it('exported', () => {
    expect(fizzBuzz(3)).toBe(['1', '2', 'Fizz'])
    expect(fizzBuzz(5)).toBe(['1', '2', 'Fizz', '4', 'Buzz'])
    expect(fizzBuzz(15)).toBe([
      '1', '2', 'Fizz',
      '4', 'Buzz', 'Fizz',
      '7', '8', 'Fizz',
      'Buzz', '11', 'Fizz',
      '13', '14', 'FizzBuzz',
    ])
  })
})
