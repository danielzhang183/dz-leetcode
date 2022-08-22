import { readFileSync, writeFileSync } from 'fs'
import fg from 'fast-glob'
import matter from 'gray-matter'
import type { Leetcode } from '../types'
import TopicData from '../data/topic.json'
import { getGeneratePath, getTargetDir, getTargetPath, taskLogger, withRoot } from './helper'

const names: { name: string; cate: string; origin: string; specify_number: string }[] = []

const getBaseFile = (fileName: string) => {
  const file = readFileSync(withRoot(fileName), 'utf8')
  const { cate, origin, name, specify_number } = matter(file).data
  names.push({
    name,
    cate,
    origin,
    specify_number,
  })
}

const writeFile = (names: { name: string; cate: string; origin: string; specify_number: string }[], type: string) => {
  const finalResult: Leetcode[] = []
  names.forEach((item, index) => {
    const { name, cate, origin, specify_number } = item
    const path = getTargetPath(getGeneratePath(type, specify_number || (index + 1).toString()))
    finalResult.push({
      name,
      path,
      cate,
      tag,
      difficulty,
      origin,
    })
  })
  writeFileSync(getTargetDir(`${type}.json`), JSON.stringify(finalResult, null, 2))
}

export function main(type: string) {
  taskLogger.loadingStart(`${type} 数据生成中...`)
  const path = TopicData.find(item => item.name === type)?.path_name
  const files = fg.sync([`./docs/Topic/${path}/*.md`], { dot: true })
  files.forEach(getBaseFile)
  writeFile(names, type)
  taskLogger.loadingEnd()
  taskLogger.end(`${type} 生成完毕`)
}
