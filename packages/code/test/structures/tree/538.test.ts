import { describe, expect, it } from 'vitest'
import { convertBST } from '../../../src/structures/tree/538'

describe('convertBST', () => {
  it('exported', () => {
    expect(convertBST([4,1,6,0,2,5,7,null,null,null,3,null,null,null,8])).toBe([0,null,1])
  })
})
