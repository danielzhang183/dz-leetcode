import { getQuestionsByFilter } from 'dz-leetcode'
import type { RandomOptions } from '../types'
import { randRange } from '../utils'
import { generateSingle } from './command'

export async function generateFromRandom(options: RandomOptions) {
  const {
    category,
    tag,
    difficulty = randomDifficulty(),
    logLevel,
  } = options

  // TODO: refine random question generated process
  const randQuestions = await getQuestionsByFilter({ category, tag, difficulty })
  const randIndex = randRange(0, 99)
  const randQuestion = randQuestions[randIndex]
  generateSingle({
    category,
    tag,
    identifier: randQuestion.titleSlug,
    logLevel,
  })
}

function randomDifficulty() {
  const map = ['EASY', 'MEDIUM', 'HARD']
  return map[randRange(0, 2)]
}
