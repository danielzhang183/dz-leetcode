import type { Question } from '~/types'

export type SortKey = 'name' | 'difficulty' | 'id'
export type SortOrder = 'asc' | 'desc'
export type SortOption = `${SortKey}-${SortOrder}`

export const DifficultyMap = {
  'Easy': 0,
  'Medium': 1,
  'Hard': 2,
  '': 3,
}

export function parseSortOption(option: SortOption) {
  return option.split('-') as [SortKey, SortOrder]
}

export function sortQuestions(questions: Question[], option: SortOption) {
  const [sortKey, sortOrder] = parseSortOption(option)

  const sorted = questions.concat()
    .sort((a, b) => {
      if (sortKey === 'id')
        return Number(a.id) - Number(b.id)
      else if (sortKey === 'name')
        return a.name.localeCompare(b.name)
      else if (sortKey === 'difficulty')
        return DifficultyMap[a.difficulty || ''] - DifficultyMap[b.difficulty || '']

      return 0
    })

  return sortOrder === 'desc'
    ? sorted.reverse()
    : sorted
}
