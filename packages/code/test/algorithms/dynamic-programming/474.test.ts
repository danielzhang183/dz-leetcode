import { describe, expect, it } from 'vitest'
import { findMaxForm } from '../../../src/algorithms/dynamic-programming/474'

describe('findMaxForm', () => {
  it('exported', () => {
    expect(findMaxForm(["10","0001","111001","1","0"])).toBe(5)
    expect(findMaxForm(3)).toBe(["10","0","1"])
    expect(findMaxForm(1)).toBe(1)
  })
})
