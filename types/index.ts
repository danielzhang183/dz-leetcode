import type Inquirer from 'inquirer'
export interface Topic {
  name: string
  // base by Topic/
  path: string
  color: {
    bg: string
    text: string
  }
}

export interface Leetcode {
  name: string
  path: string
  cate: string
  tag: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  origin: string
}

export interface TopicDataItemWhenGenerate {
  name: string
  display_name: string
  background_color: string
  text_color: string
  path_name: string
  home_page: string
}

export interface TopicDataItem {
  name: string
  display_name: string
  color: {
    bg: string
    text: string
  }
  path_name: string
  home_page: string
  // when you create a topic's article, it will show what questions
  questions: Inquirer.Question[]
}
