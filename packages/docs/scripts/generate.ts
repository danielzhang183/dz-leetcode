import { join, resolve } from 'path'
import MagicString from 'magic-string'
import { getQuestion, getQuestionOrigin, getQuestionPath } from './question'
import type { GenerateOptions, GenerateReturn, RawQuestion, WritableQuestions } from './types'
import { hyphenate, readFile, writeFile } from './utils'
import { parse, stringify } from './parse'
import type { Tag } from '~/types'

export const root = resolve(process.cwd(), './packages')
export const pathCode = join(root, './code')
export const pathDocs = join(root, './docs')

export function genMarkdown(question: RawQuestion): GenerateReturn {
  const { content, categoryTitle, questionId, title, difficulty, titleSlug, tag } = question
  const origin = getQuestionOrigin(titleSlug)

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
      genCode(question).content,
      '```\n',
      `[view source](${origin})`,
    ]
      .forEach(str => s.append(`${str}\n`))
  }

  function transformMarkdown(s: MagicString) {
    s
      .replace('&nbsp;', ' ')
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
    outFile: join(
      pathDocs,
      'src/pages',
      getQuestionPath(categoryTitle, tag!, questionId, '.md'),
    ),
    content: s.toString(),
  }
}

export async function genCategory(question: RawQuestion): Promise<GenerateReturn> {
  const { categoryTitle, tag, title } = question
  const path = join(pathDocs, 'data', hyphenate(categoryTitle), `${hyphenate(tag!)}.yml`)
  const questions = parse<WritableQuestions>(await readFile(path)) || { questions: [] }
  questions.questions.push({
    name: title,
    title: question.titleSlug,
    difficulty: question.difficulty,
    id: question.questionId,
    link: `/${getQuestionPath(categoryTitle, tag!, question.questionId)}`,
    origin: getQuestionOrigin(question.titleSlug),
    tag: question.tag!,
    category: hyphenate(categoryTitle),
  })

  return {
    type: 'category',
    outFile: path,
    content: stringify(questions)!,
  }
}

export function genCode(question: RawQuestion): GenerateReturn {
  const { codeSnippets, categoryTitle, questionId, tag } = question
  const code = codeSnippets.find(i => i.lang === 'TypeScript')?.code || ''

  return {
    type: 'code',
    outFile: join(
      pathCode,
      'src',
      getQuestionPath(categoryTitle, tag!, questionId),
    ),
    content: `export ${code}`,
  }
}

export function genTestCase(question: RawQuestion): GenerateReturn {
  function normalizeTestCases(exampleTestcases: string): Array<{
    expect: string
    toBe: string
  }> {
    const res = []
    const testcases = exampleTestcases.split('\n')
    for (let i = 0; i < testcases.length - 1; i += 2)
      res.push({ expect: testcases[i], toBe: testcases[i + 1] })

    return res
  }

  const { categoryTitle, questionId, exampleTestcases, tag } = question
  const { content } = genCode(question)
  const re = /function \*?(\w+)\(/
  const fn = content.match(re)![1]

  const s = new MagicString('')
  ;[
    'import { describe, expect, it } from \'vitest\'',
    `import { ${fn} } from '../../../src'\n`,
    `describe('${fn}', () => {`,
    '  it(\'exported\', () => {',
    ...normalizeTestCases(exampleTestcases).map(
      ({ expect, toBe }) => `    expect(${fn}(${expect})).toBe(${toBe})`,
    ),
    '  })',
    '})',
  ]
    .forEach(str => s.append(`${str}\n`))

  return {
    type: 'testcase',
    outFile: join(
      pathCode,
      'src',
      getQuestionPath(categoryTitle, tag!, questionId),
    ),
    content: s.toString(),
  }
}

export async function generate(file: string, options: GenerateOptions) {
  const {
    root = process.cwd(),
  } = options

  const absolute = resolve(root, file)
  // const { ext } = parsePath(absolute)
  // const useYaml = options.useYaml || /ya?ml/.test(ext)
  const questions = parse(await readFile(absolute) || '')?.questions
  if (!questions || questions.length)
    throw new Error(`Please ensure that ${absolute} has import data!`)

  for (const question of questions)
    run(question.name, question.tag)
}

export async function run(titleSlug: string, tag?: Tag) {
  const question = await getQuestion(titleSlug)
  if (tag)
    question.tag = tag

  Promise.all([
    genMarkdown(question),
    genCategory(question),
    genCode(question),
    genTestCase(question),
  ]).then(modules => modules.forEach(({ type, outFile, content }) => {
    console.log(`DZ LEETCODE: ${type} Generating....`)
    writeFile(outFile, content)
    console.log(`DZ LEETCODE: ${type} Done....`)
  }))
}
