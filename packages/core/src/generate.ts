/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-console */
import { join, resolve } from 'path'
import MagicString from 'magic-string'
import { getQuestionById, getQuestionByTitle, normalizeRawQuestion, normalizeResolvedQuestion } from './question'
import type { GenerateReturn, ImportableQuestionOptions, ImportableQuestions, ResolvedQuestion, WritableQuestions } from './types'
import { readFile, writeFile } from './utils'
import { parse, stringify } from './parse'

export const root = resolve(process.cwd(), './packages')
export const pathCode = join(root, './code')
export const pathDocs = join(root, './docs')

export function genMarkdown(question: ResolvedQuestion): GenerateReturn {
  const {
    code,
    content,
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

export async function genCatelog(question: ResolvedQuestion): Promise<GenerateReturn> {
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

export function genCode(question: ResolvedQuestion): GenerateReturn {
  const { code, path } = question

  return {
    type: 'code',
    outFile: join(pathCode, 'src', `${path}.ts`),
    content: `export ${code}`,
  }
}

export function genTestCase(question: ResolvedQuestion): GenerateReturn {
  const { testcases, functionName, path } = question

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
    outFile: join(pathCode, 'test', `${path}.test.ts`),
    content: s.toString(),
  }
}

export async function generate(file: string) {
  const questions = parse<ImportableQuestions>(await readFile(file) || '')?.questions
  if (!questions || !questions.length)
    throw new Error(`Please ensure that ${file} has import data!`)

  batchGenerate(questions)
}

export async function batchGenerate(questions: ImportableQuestionOptions[]) {
  for (const question of questions)
    singleGenerate(question)
}

export async function singleGenerate(
  options: ImportableQuestionOptions,
): Promise<string | undefined> {
  const { category, tag, id, name } = options
  if (!id && !name)
    return Promise.reject<string>('dz-leetcode: Give question name or id at least!')

  const rawQuestion = id
    ? await getQuestionById(id)
    : await getQuestionByTitle(name!)
  if (!rawQuestion)
    return Promise.reject<string>('dz-leetcode: Not found question')

  const question = normalizeRawQuestion(rawQuestion, category, tag)

  Promise.all([
    genMarkdown(question),
    genCatelog(question),
    genCode(question),
    genTestCase(question),
  ]).then(modules => modules.forEach(async ({ type, outFile, content }) => {
    console.log(`DZ LEETCODE: ${type} Generating....`)
    await writeFile(outFile, content)
    console.log(`DZ LEETCODE: ${type} Done....`)
  }))
}
