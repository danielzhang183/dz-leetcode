import { describe, expect, it } from 'vitest'
import { partitionLabels } from '../../../src/algorithms/greedy/763'

describe('partitionLabels', () => {
  it('exported', () => {
    expect(partitionLabels("ababcbacadefegdehijhklij")).toBe("eccbbbbdec")
  })
})
