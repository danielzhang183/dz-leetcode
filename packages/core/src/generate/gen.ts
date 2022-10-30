import { join, resolve } from 'path'
import MagicString from 'magic-string'
import type { GenerateOutcomes, ResolvedQuestion, WritableQuestions } from '../types'
import { parse, readFile, stringify } from '../io'
import { normalizeResolvedQuestion } from '../question'

export const root = resolve(process.cwd(), './packages')
export const pathCode = join(root, './code')
export const pathDocs = join(root, './docs')

export function genMarkdown(question: ResolvedQuestion): GenerateOutcomes {
  const {
    code,
    content = '',
    questionId,
    title,
    difficulty,
    origin,
    path,
  } = question

  function genMarkdownPre(s: MagicString) {
    [
      '---',
      `title: ${title}`,
      `display: ${questionId}. ${title}`,
      `difficulty: ${difficulty}`,
      `origin: ${origin}`,
      '---',
      '\n[[toc]]\n',
      '## Problem\n',
    ]
      .reverse()
      .forEach(str => s.prepend(`${str}\n`))
  }

  function genMarkdownPost(s: MagicString) {
    [
      '\n\n## Solution\n',
      '```ts',
      code,
      '```\n',
      `[view source](${origin})`,
    ]
      .forEach(str => s.append(`${str}\n`))
  }

  function transformMarkdown(s: MagicString) {
    s
      .replaceAll('&nbsp;', ' ')
      .replaceAll(/\t/g, '  ')
      .replaceAll(/<\/?p>/g, '')
      .replaceAll(/<\/?code>/g, '')
      .replaceAll(/<strong\sclass=.*?>/g, '<strong>')
  }

  const s = new MagicString(content)
  transformMarkdown(s)
  genMarkdownPre(s)
  genMarkdownPost(s)

  return {
    type: 'markdown',
    outFile: join(pathDocs, 'src/pages', `${path}.md`),
    content: s.toString(),
  }
}

export async function genCatelog(question: ResolvedQuestion): Promise<GenerateOutcomes> {
  const path = join(pathDocs, 'data', `${question.path.replace(/(\/\d+$)/g, '')}.yml`)
  const content = parse<WritableQuestions>(await readFile(path) || '') || { questions: [] }
  if (!content.questions.find(i => i.title === question.titleSlug))
    content.questions.push(normalizeResolvedQuestion(question))

  return {
    type: 'category',
    outFile: path,
    content: stringify(content)!,
  }
}

export function genCode(question: ResolvedQuestion): GenerateOutcomes {
  const { code, path, lang } = question

  return {
    type: 'code',
    outFile: join(pathCode, 'src', `${path}.${ensureExtName(lang)}`),
    content: `export ${code}`,
  }
}

export function genTestCase(question: ResolvedQuestion): GenerateOutcomes {
  const { testcases, functionName, path, lang } = question

  const s = new MagicString('')
    ;[
    'import { describe, expect, it } from \'vitest\'',
      `import { ${functionName} } from '../../../src/${path}'\n`,
      `describe('${functionName}', () => {`,
      '  it(\'exported\', () => {',
      ...testcases.map(
        ({ expect, toBe }) => `    expect(${functionName}(${expect})).toBe(${toBe})`,
      ),
      '  })',
      '})',
  ]
    .forEach(str => s.append(`${str}\n`))

  return {
    type: 'testcase',
    outFile: join(pathCode, 'test', `${path}.test.${ensureExtName(lang)}`),
    content: s.toString(),
  }
}

// ext name fallback
const EXT: Record<string, string> = {
  typescript: 'ts',
  javascript: 'js',
}
export function ensureExtName(lang: string) {
  return EXT[lang] || lang
}
