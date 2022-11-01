import { describe, expect, it } from 'vitest'
import { isHappy } from '../../../src/structures/hash-table/202'

describe('isHappy', () => {
  it('exported', () => {
    expect(isHappy(19)).toBe(2)
  })
})
