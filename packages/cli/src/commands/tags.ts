import { resolve } from 'path'
import type { WritableQuestions } from 'dz-leetcode'
import { getQuestionByTitle, stringify, writeFile } from 'dz-leetcode'
import pLimit from 'p-limit'
import c from 'picocolors'
import { resolveFiles } from '../io/fs'
import { loadQuestions } from '../io/loader'

const QUESTION_ROOT = resolve(process.cwd(), 'packages/docs/data')

export async function patchQuestionsTags(cwd = QUESTION_ROOT) {
  const dirs = await resolveFiles(cwd, '**/*.yml')
  console.log(c.magenta('Updating question tags...'))
  console.log()
  await Promise.all(
    dirs.map(async dir => await patchQuestionTags(dir)),
  )
  console.log()
  console.log(`${c.inverse(c.bold(c.green(' Done ')))} ${c.green('without any error')}`)
}

async function patchQuestionTags(filepath: string) {
  const questions = await loadQuestions<WritableQuestions>(filepath)
  if (!questions)
    return

  const limit = pLimit(1)
  const questionsWithTags = await Promise.all(
    questions.map(question => limit(async (question) => {
      const q = await getQuestionByTitle(question.title)
      if (q)
        question.tags = q.topicTags.map(i => i.slug)
      return question
    }, question)),
  )
  await writeFile(filepath, stringify({ questions: questionsWithTags })!)
  console.log(filepath)
}
