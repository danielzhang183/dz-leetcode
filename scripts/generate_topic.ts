import { readFileSync, writeFileSync } from 'fs'
import Inquirer from 'inquirer'
import { ensureDirSync } from 'fs-extra'
import { sync as execSync } from 'cross-spawn'
import TopicData from '../data/topic.json'
import type { TopicDataItem, TopicDataItemWhenGenerate } from '../types/index'
import { FirstUpperCase, taskLogger, withRoot } from './helper'

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What\'s the new topic name?(must lowercase !!!)',
  },
  {
    type: 'input',
    name: 'display_name',
    message: 'What\'s the new topic show name on website?',
  },
  {
    type: 'input',
    name: 'path_name',
    message: 'What\'s the new topic path on your disk?',
    default: ({ name }: { name: string }) =>
      `${FirstUpperCase(name)}/Articles`,
  },
  {
    type: 'input',
    name: 'home_page',
    message: 'What\'s the new topic home page path on your disk?',
    default: ({ name }: { name: string }) =>
      `/${FirstUpperCase(name)}/index`,
  },
  {
    type: 'input',
    name: 'background_color',
    message: 'What\'s the new topic panel background color?(default #0052cc)`',
    default: '#0052cc',
  },
  {
    type: 'input',
    name: 'text_color',
    message: 'What\'s the new topic panel text color?(default rgba(233, 236, 239))`',
    default: 'rgba(233, 236, 239)',
  },
] as Inquirer.Question[]

async function generateTopicData() {
  const {
    name, display_name,
    background_color, text_color,
    path_name, home_page,
  }
  = await Inquirer.prompt(questions) as TopicDataItemWhenGenerate
  const data = {
    name,
    display_name,
    path_name,
    home_page,
    color: {
      bg: background_color,
      text: text_color,
    },
    questions: [
      {
        name: 'name',
        type: 'input',
        message: '文章名称',
      },
    ],
  } as TopicDataItem
  writeFileSync(withRoot('./data/topic.json'), JSON.stringify([...TopicData, data], null, 2))
  return data
}

const getNeedReplaceData = ({ name, display_name }: { name: string; display_name: string }) => ({
  topic_display_name: display_name,
  topic_name: name,
})

const getPlaceholder = (key: string) => `\${${key}}`

async function generateRealPath({ name, display_name }: TopicDataItem) {
  ensureDirSync(withRoot(`./docs/Topic/${FirstUpperCase(name)}`))
  let topicHomeContent = readFileSync(withRoot('./scripts/TopicTemplate/index.md'), 'utf8')
  const replaceData = getNeedReplaceData({ name, display_name })
  Object.keys(replaceData).forEach((key) => {
    topicHomeContent = topicHomeContent.replace(getPlaceholder(key), replaceData[key])
  })
  // generate docs path
  writeFileSync(withRoot(`./docs/Topic/${FirstUpperCase(name)}/index.md`), topicHomeContent, 'utf8')
  ensureDirSync(withRoot(`./docs/Topic/${FirstUpperCase(name)}/Articles`))
  // generate data file
  writeFileSync(withRoot(`./data/topic/${name}.json`), JSON.stringify([], null, 2))
}

async function main() {
  // 1. generate topic data
  const data = await generateTopicData()
  // 2. generate real path
  await generateRealPath(data)
  // 3. generate vitepress data
  execSync('npm', ['run', 'gv'], { stdio: 'inherit' })
  taskLogger.end('任务完成')
}

main()
