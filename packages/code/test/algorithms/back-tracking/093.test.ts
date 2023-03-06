import { describe, expect, it } from 'vitest'
import { restoreIpAddresses } from '../../../src/algorithms/back-tracking/093'

describe('restoreIpAddresses', () => {
  it('exported', () => {
    expect(restoreIpAddresses('25525511135')).toStrictEqual(['255.255.11.135', '255.255.111.35'])
    expect(restoreIpAddresses('0000')).toStrictEqual(['0.0.0.0'])
    expect(restoreIpAddresses('101023')).toStrictEqual(['1.0.10.23', '1.0.102.3', '10.1.0.23', '10.10.2.3', '101.0.2.3'])
  })
})
