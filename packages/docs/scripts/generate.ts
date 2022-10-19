import { join, resolve } from 'path'
import MagicString from 'magic-string'
import { getQuestion, getQuestionOrigin, getQuestionPath, normalizeQuestion } from './question'
import type { GenerateOptions, GenerateReturn, ImportableQuestionOptions, RawQuestion as ReslovedQuestion, WritableQuestions } from './types'
import { hyphenate, readFile, writeFile } from './utils'
import { parse, stringify } from './parse'

export const root = resolve(process.cwd(), '../..', './packages')
export const pathCode = join(root, './code')
export const pathDocs = join(root, './docs')

export function genMarkdown(question: ReslovedQuestion): GenerateReturn {
  const { content, category, questionId, title, difficulty, titleSlug, tag } = question
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
      getQuestionPath(category, tag, questionId, '.md'),
    ),
    content: s.toString(),
  }
}

export async function genCatelog(question: ReslovedQuestion): Promise<GenerateReturn> {
  const { category, tag, title } = question
  const path = join(pathDocs, 'data', hyphenate(category), `${hyphenate(tag)}.yml`)
  const questions = parse<WritableQuestions>(await readFile(path) || '') || { questions: [] }
  questions.questions.push({
    name: title,
    title: question.titleSlug,
    difficulty: question.difficulty,
    id: question.questionId,
    link: `/${getQuestionPath(category, tag, question.questionId)}`,
    origin: getQuestionOrigin(question.titleSlug),
    tag: question.tag,
    category: hyphenate(category),
  })

  return {
    type: 'category',
    outFile: path,
    content: stringify(questions)!,
  }
}

export function genCode(question: ReslovedQuestion): GenerateReturn {
  const { code, category, questionId, tag } = question

  return {
    type: 'code',
    outFile: join(
      pathCode,
      'src',
      getQuestionPath(category, tag, questionId, '.ts'),
    ),
    content: `export ${code}`,
  }
}

export function genTestCase(question: ReslovedQuestion): GenerateReturn {
  const { category, questionId, testcases, tag } = question
  const { content } = genCode(question)
  const re = /function \*?(\w+)\(/
  const fn = content.match(re)![1]

  const s = new MagicString('')
  ;[
    'import { describe, expect, it } from \'vitest\'',
    `import { ${fn} } from '../../../src'\n`,
    `describe('${fn}', () => {`,
    '  it(\'exported\', () => {',
    ...testcases.map(
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
      'test',
      getQuestionPath(category, tag, questionId, '.test.ts'),
    ),
    content: s.toString(),
  }
}

export async function generate(file: string, options: GenerateOptions = {}) {
  const {
    root = process.cwd(),
  } = options

  const absolute = resolve(root, file)
  // const { ext } = parsePath(absolute)
  // const useYaml = options.useYaml || /ya?ml/.test(ext)
  const questions = parse(await readFile(absolute) || '')?.questions
  if (!questions?.length)
    throw new Error(`Please ensure that ${absolute} has import data!`)

  console.log(process.cwd())
  for (const question of questions)
    await run(question)
}

export async function run(options: ImportableQuestionOptions) {
  const {
    name,
    category,
    tag,
  } = options
  const rawQuestion = await getQuestion(name)
  const question = normalizeQuestion(rawQuestion, category, tag)

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

generate('./data/questions.yml', {})
