import { describe, expect, it } from 'vitest'
import { findItinerary } from '../../../src/algorithms/back-tracking/332'

describe('findItinerary', () => {
  it('exported', () => {
    expect(findItinerary([['MUC', 'LHR'], ['JFK', 'MUC'], ['SFO', 'SJC'], ['LHR', 'SFO']])).toBe([['JFK', 'SFO'], ['JFK', 'ATL'], ['SFO', 'ATL'], ['ATL', 'JFK'], ['ATL', 'SFO']])
  })
})
