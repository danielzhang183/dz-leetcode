import { describe, expect, it } from 'vitest'
import { fn } from '../../../src/structures/stack/232'

describe('fn', () => {
  it('exported', () => {
    expect(fn(['MyQueue', 'push', 'push', 'peek', 'pop', 'empty'])).toBe([[], [1], [2], [], [], []])
  })
})
