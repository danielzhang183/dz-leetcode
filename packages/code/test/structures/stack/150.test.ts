import { describe, expect, it } from 'vitest'
import { evalRPN } from '../../../src/structures/stack/150'

describe('evalRPN', () => {
  it('exported', () => {
    expect(evalRPN(['2', '1', '+', '3', '*'])).toBe(['4', '13', '5', '/', '+'])
  })
})
