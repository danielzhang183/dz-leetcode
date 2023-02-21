import { describe, expect, it } from 'vitest'
import { evalRPN } from '../../../src/structures/stack/150'

describe('evalRPN', () => {
  it('exported', () => {
    expect(evalRPN(['2', '1', '+', '3', '*'])).toBe(9)
    expect(evalRPN(['4', '13', '5', '/', '+'])).toBe(6)
    expect(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])).toBe(22)
  })
})
