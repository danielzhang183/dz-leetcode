import { describe, expect, it } from 'vitest'
import type { CommonOptions } from 'dz-leetcode'
import { resolveConfig } from '../src/config'

describe('load config', () => {
  it('with lang', async () => {
    const options: CommonOptions = {
      lang: 'java',
    }

    expect(await resolveConfig(options)).toMatchInlineSnapshot(`
      {
        "identifier": [],
        "lang": [
          "java",
          "typescript",
          "javascript",
        ],
      }
    `)
  })
})
