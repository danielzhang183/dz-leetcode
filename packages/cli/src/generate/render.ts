import type { GenerateError, GenerateReturn, ResolvedQuestion } from 'dz-leetcode'
import c from 'picocolors'
import { formatTable } from '../render'
import type { CategoryMeta } from '../types'

export function renderCategories(resolveCategories: CategoryMeta[]) {
  const lines: string[] = ['']
  const errLines: string[] = []

  resolveCategories.forEach((category) => {
    const result = renderCategory(category)
    lines.push(...result.lines)
    errLines.push(...result.errLines)
  })

  return { lines, errLines }
}

export function renderCategory(cate: CategoryMeta) {
  const lines: string[] = []
  const errLines: string[] = []
  const { resolved, tagMap, category } = cate

  const tags: Record<string, ResolvedQuestion[]> = {}
  for (const question of resolved) {
    const { tag } = question
    if (!tags[tag])
      tags[tag] = []
    tags[tag].push(question)
  }

  Object.entries((tags)).forEach(([tag, questions]) => {
    const total = tagMap[tag].length
    const generatedCount = questions.length
    const tip = [
      `${c.yellow(generatedCount)} generated`,
      `${c.yellow(total - generatedCount)} fail`,
      `${c.yellow(total)} total`,
    ].join(', ')
    lines.push(
      '',
      `${c.blue(`${category} > ${tag}`)} ${c.dim('-')} ${tip}`,
      '',
    )

    questions = questions.sort((a, b) => Number(a.questionId) - Number(b.questionId))

    lines.push(...formatTable(
      questions.map(q => renderResolveQuestion(q)),
      'LRRR',
    ))
  })
  lines.push('')

  const errors = cate.errors
  if (errors.length) {
    lines.push()
    for (const error of errors)
      errLines.push(...renderResolveError(error as GenerateError))
    lines.push()
  }

  return {
    lines,
    errLines,
  }
}

export function renderSingleQuestion({ error, question }: GenerateReturn) {
  const lines: string[] = []
  const errLines: string[] = []

  if (question) {
    lines.push(
      '',
      `${c.blue('generated files:')}`,
      ...question.outFiles.map(i => `${c.green('+')} ${c.underline(i)}`),
    )
  }

  if (error) {
    errLines.push(
      '',
      c.inverse(c.red(c.bold(' ERROR '))),
      ...renderResolveError(error as GenerateError),
    )
  }
  else {
    errLines.push(
      '',
      `${c.inverse(c.bold(c.green(' Done ')))} ${c.green('without any generate error')}`,
    )
  }

  return { lines, errLines }
}

export function renderResolveQuestion(question: ResolvedQuestion) {
  const { title, questionId, difficulty, path } = question
  const color = {
    Easy: 'green',
    Medium: 'magenta',
    Hard: 'red',
  }[difficulty]

  return [
    title,
    c.gray(questionId),
    // @ts-expect-error Color
    c[color](difficulty),
    c.gray(c.underline(path)),
  ]
}

export function renderResolveError(error: GenerateError) {
  const lines: string[] = ['']
  if (error.error)
    lines.push(c.red(`> ${c.underline(`${error.category}/${error.tag}`)} ${String(error.error)}`))
  return lines
}
