import { describe, expect, it } from 'vitest'
import { partitionLabels } from '../../../src/algorithms/greedy/763'

describe('partitionLabels', () => {
  it('exported', () => {
    expect(partitionLabels('ababcbacadefegdehijhklij')).toStrictEqual([9, 7, 8])
    expect(partitionLabels('eccbbbbdec')).toStrictEqual([10])
  })
})
