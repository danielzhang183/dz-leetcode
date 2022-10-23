import { join, resolve } from 'path'
import MagicString from 'magic-string'
import { getQuestionById, getQuestionByTitle, normalizeRawQuestion, normalizeResolvedQuestion } from './question'
import type { GenerateReturn, ImportableQuestionOptions, ResolvedQuestion, WritableQuestions } from './types'
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

// export async function generate(file: string): Promise<RuntimeErrorLog[]> {
//   const questions = parse<ImportableQuestions>(await readFile(file) || '')?.questions
//   const errorLogs: RuntimeErrorLog[] = []
//   if (!questions || !questions.length) {
//     errorLogs.push({
//       type: 'batch-error',
//       file,
//       timestamp: Date.now(),
//       error: `${file} has no import data!`,
//     })

//     return errorLogs
//   }

//   async function batchGenerate(questions: ImportableQuestionOptions[]) {
//     const logs = await Promise.all(
//       questions.map(async (question: ImportableQuestionOptions): Promise<SingleErrorLog | ResolvedQuestion> => {
//         return await singleGenerate(question)
//       }))
//     return logs.filter(i => i) as SingleErrorLog[]
//   }

//   return batchGenerate(questions)
// }

export async function singleGenerate(options: ImportableQuestionOptions): Promise<{
  error: any
  question: ResolvedQuestion | null
}> {
  const { category, tag, id, name } = options
  if (!id && !name) {
    return {
      question: null,
      error: 'Give question name or id at least',
    }
  }

  const rawQuestion = id
    ? await getQuestionById(id)
    : await getQuestionByTitle(name!)
  if (!rawQuestion) {
    return {
      question: null,
      error: `Question ${id ? `No.${id}` : name} Not Found!`,
    }
  }

  const question = normalizeRawQuestion(rawQuestion, category, tag)
  const gens = await Promise.all([
    genMarkdown(question),
    genCatelog(question),
    genCode(question),
    genTestCase(question),
  ])
  await Promise.all(gens.map(async ({ outFile, content }) => {
    await writeFile(outFile, content)
  }))

  return {
    question,
    error: null,
  }
}
