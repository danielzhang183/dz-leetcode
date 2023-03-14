import { describe, expect, it } from 'vitest'
import { ladderLength } from '../../../src/structures/graph/127'

describe('ladderLength', () => {
  it('exported', () => {
    expect(ladderLength('hit')).toBe('cog')
    expect(ladderLength(['hot', 'dot', 'dog', 'lot', 'log', 'cog'])).toBe('hit')
    expect(ladderLength('cog')).toBe(['hot', 'dot', 'dog', 'lot', 'log'])
  })
})
