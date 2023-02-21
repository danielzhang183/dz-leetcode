import { describe, expect, it } from 'vitest'
import { removeDuplicates } from '../../../src/structures/stack/1047'

describe('removeDuplicates', () => {
  it('exported', () => {
    expect(removeDuplicates('abbaca')).toBe('ca')
    expect(removeDuplicates('azxxzy')).toBe('ay')
  })
})
