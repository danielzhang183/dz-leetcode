import { join } from 'path'
import MagicString from 'magic-string'
import type { GenerateOutcomes, ResolvedQuestion, WritableQuestions } from '../types'
import { parse, readFile, stringify } from '../io'
import { normalizeResolvedQuestion } from '../question'
import { sortQuestions } from '../utils/sort'

const root = process.cwd()
const pathCode = join(root, './packages/code')
const pathDoc = join(root, './packages/docs')

export function genMarkdown(question: ResolvedQuestion, genPath = pathDoc): GenerateOutcomes {
  const {
    code,
    content = '',
    questionId,
    title,
    difficulty,
    origin,
    path,
    isTranslated = false,
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
      `## ${isTranslated ? '问题' : 'Problem'}\n`,
    ]
      .reverse()
      .forEach(str => s.prepend(`${str}\n`))
  }

  function genMarkdownPost(s: MagicString) {
    [
      `\n\n## ${isTranslated ? '解决方案' : 'Solution'}\n`,
      '```ts',
      code,
      '```\n',
    ]
      .forEach(str => s.append(`${str}\n`))
  }

  function transformMarkdown(s: MagicString) {
    s
      .replaceAll('&nbsp;', ' ')
      .replaceAll(/\t/g, '  ')
      .replaceAll(/<\/?p>/g, '')
      .replaceAll(/<\/?code>/g, '')
      .replaceAll(/<\/?pre>/g, '```')
      .replaceAll( // modify example
        isTranslated
          ? /<strong>(示例 \d)：<\/strong>/g
          : /<strong\sclass=.*?>(.*?)\:<\/strong>/g,
        (_, $1) => `### ${$1}`,
      )
      .replaceAll(/<\/?em>/g, '`')
      .replaceAll(/\n<[uo]l>\n|\n<\/[uo]l>/g, '')
      .replaceAll(/\s\s<li>(.*?)<\/li>/g, (_, $1) => `\n- ${$1}`)

    if (s.hasChanged())
      s = new MagicString(s.toString())

    const index = s.toString().indexOf(`\n### ${isTranslated ? '示例' : 'Example'}`)
    s.prependLeft(index, `## ${isTranslated ? '示例' : 'Examples'}\n`)
    s.replaceAll(/<strong>|((\s+)?<\/strong>)/g, '**')

    return s
  }

  let s = new MagicString(content)
  s = transformMarkdown(s)
  genMarkdownPre(s)
  genMarkdownPost(s)

  return {
    type: 'markdown',
    outFile: join(genPath, 'src/pages', `${path}.md`),
    content: s.toString(),
  }
}

export async function genCatalog(question: ResolvedQuestion, genPath = pathDoc): Promise<GenerateOutcomes> {
  const path = join(genPath, 'data', `${question.path.replace(/(\/\d+$)/g, '')}.yml`)
  const content = parse<WritableQuestions>(await readFile(path) || '') || { questions: [] }
  if (!content.questions.find(i => i.title === question.titleSlug))
    content.questions.push(normalizeResolvedQuestion(question))
  content.questions = sortQuestions(content.questions, 'id-asc')

  return {
    type: 'category',
    outFile: path,
    content: stringify(content)!,
  }
}

export function genCode(question: ResolvedQuestion, genPath = pathCode): GenerateOutcomes {
  const { code, path, lang } = question

  return {
    type: 'code',
    outFile: join(genPath, 'src', `${path}.${ensureExtName(lang)}`),
    content: `export ${code}`,
  }
}

export function genTestCase(question: ResolvedQuestion, genPath = pathCode): GenerateOutcomes {
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
    outFile: join(genPath, 'test', `${path}.test.${ensureExtName(lang)}`),
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
