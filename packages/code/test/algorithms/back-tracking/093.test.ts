import { describe, expect, it } from 'vitest'
import { restoreIpAddresses } from '../../../src/algorithms/back-tracking/093'

describe('restoreIpAddresses', () => {
  it('exported', () => {
    expect(restoreIpAddresses('25525511135')).toBe('0000')
  })
})
