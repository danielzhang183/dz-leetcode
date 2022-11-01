import { describe, expect, it } from 'vitest'
import { predictPartyVictory } from '../../../src/algorithms/greedy/649'

describe('predictPartyVictory', () => {
  it('exported', () => {
    expect(predictPartyVictory('RD')).toBe('RDD')
  })
})
