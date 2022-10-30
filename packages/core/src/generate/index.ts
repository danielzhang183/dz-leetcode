import { writeFile } from '../io'
import { getQuestionById, getQuestionByTitle, normalizeRawQuestion } from '../question'
import type { GenerateError, GenerateOptions, GenerateReturn, ResolvedQuestion } from '../types'
import { isNumber } from '../utils'
import { genCatelog, genCode, genMarkdown, genTestCase } from './gen'

export async function generate(options: GenerateOptions): Promise<GenerateReturn> {
  const { category, tag, identifier, write = true, lang } = options
  if (!identifier) {
    return {
      error: generateError('Give question name or id at least', category, tag),
    }
  }

  const rawQuestion = isNumber(identifier)
    ? await getQuestionById(identifier)
    : await getQuestionByTitle(identifier)
  if (!rawQuestion) {
    return {
      error: generateError(`Question ${identifier} Not Found!`, category, tag),
    }
  }

  const question = normalizeRawQuestion(rawQuestion, { category, tag, lang })
  if (write)
    return await writeQuestion(question)

  return { question }
}

export function generateError(error: unknown, category = 'unknown-category', tag = 'unknown-tag'): GenerateError {
  return {
    category,
    tag,
    error,
    timestamp: Date.now(),
  }
}

export async function writeQuestion(question: ResolvedQuestion): Promise<GenerateReturn> {
  try {
    const gens = await Promise.all([
      genMarkdown(question),
      genCatelog(question),
      genCode(question),
      genTestCase(question),
    ])
    const outFiles = await Promise.all(
      gens.map(async ({ outFile, content }) => {
        await writeFile(outFile, content)
        return outFile
      }),
    )
    question.outFiles = outFiles.sort()
  }
  catch (error) { // TODO: not handle carefully
    return {
      error: generateError(error, question.category, question.tag),
    }
  }

  return { question }
}
