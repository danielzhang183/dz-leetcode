import { describe, expect, it } from 'vitest'
import { removeDuplicates } from '../../../src/structures/queue/1047'

describe('removeDuplicates', () => {
  it.skip('exported', () => {
    expect(removeDuplicates('abbaca')).toBe('azxxzy')
  })
})
