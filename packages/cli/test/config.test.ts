import { describe, expect, it } from 'vitest'
import { resolveConfig } from '../src/config'
import type { CommonOptions } from '../src/types'

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
