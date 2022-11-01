import { describe, expect, it } from 'vitest'
import { rightSideView } from '../../../src/structures/tree/199'

describe('rightSideView', () => {
  it('exported', () => {
    expect(rightSideView([1, 2, 3, null, 5, null, 4])).toBe([1, null, 3])
  })
})
