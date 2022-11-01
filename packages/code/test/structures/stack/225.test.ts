import { describe, expect, it } from 'vitest'
import { fn } from '../../../src/structures/stack/225'

describe('fn', () => {
  it('exported', () => {
    expect(fn(['MyStack', 'push', 'push', 'top', 'pop', 'empty'])).toBe([[], [1], [2], [], [], []])
  })
})
