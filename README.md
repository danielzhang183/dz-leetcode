# dz-leetcode

## Installation & Run

```bash
# installation
pnpm i

# run
pnpm dev
```

## CLI

- it will generate four parts are as follow:
  - catelog
  - markdown (with title & solution template)
  - code
  - related testcases
- the generate pattern is `category`/`tag`/`questionId`
  - you can decide to specify `category` and `tag` or not, if you not, it will be generated by the origin property of question by default.
  - you can visit the generated question by site `http://localhost:5173/category/tag/questionId`

### Register CLI

```bash
# build first
pnpm build

# register cli
npm link
#or
pnpm link dz-leetcode

# unregister cli
npm unlink
#or
pnpm unlink dz-leetcode
```

### CLI Options

```bash
dz-leetcode/0.0.0

Usage:
  $ dz-leetcode

Commands:
  file <file>
  pink <title | id<,title<, id>>>


For more info, run any command with the `--help` flag:
  $ dz-leetcode file --help
  $ dz-leetcode pink --help
  $ dz-leetcode --help

Options:
  -v, --version                 Display version number
  -r, --root <path>             root path
  -c, --category <category>     Question category
  -t, --tag <tag>               Question tag
  -lang, --language <language>  zh|zh-CN|en|en-US
  -h, --help                    Display this message
```

### Usage

I. file generate questions with reading specfic file path

```bash
dz-leetcode file example/questions.yml
```

Configuration file usage

I. config file usage `.leetcoderc.json` or `leetcode.config.ts`

```ts
import { defineConfig } from 'dz-leetcode'

export default defineConfig({
  root: '',
  lang: [
    'typescript',
    'javascript',
  ],
  onlyDoc: false,
})
```

II. import questions file usage

```yml
questions:
  - category: algorithms #option
    tag: array #option
    name: two-sum
  #or
  - category: algorithms #option
    tag: array #option
    id: 1
  #or
  - category: algorithms #option
    tag: array #option
    questions:
      - two-sum
      - 2
  ...
```

II. generate picking questions with (title or id) or multple (title or id)s with ','

```bash
dz-leetcode pick two-sum
#or
dz-leetcode pick 1
#or
dz-leetcode pick two-sum,2,3
#or
dz-leetcode pick two-sum -c algorithms
#or
dz-leetcode pick two-sum -c algorithms -t array
```

III. random generate one question

```bash
dz-leetcode random
or
dz-leetcode random -i
```

**WIP**

- [x] generate by question id
- [x] beautify generate process
- [x] support random generate one question
- [x] beautify random question generate process
- [ ] support 'zh' language
- [ ] support diff log level
