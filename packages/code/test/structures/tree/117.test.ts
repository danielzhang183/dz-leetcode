import { describe, expect, it } from 'vitest'
import { connect } from '../../../src/structures/tree/117'

describe('connect', () => {
  it('exported', () => {
    expect(connect([1, 2, 3, 4, 5, null, 7])).toBe([])
  })
})
