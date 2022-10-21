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

### Regiter CLI

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
  batch <file>
  single <title>


For more info, run any command with the `--help` flag:
  $ dz-leetcode batch --help
  $ dz-leetcode single --help
  $ dz-leetcode --help

Options:
  -v, --version              Display version number
  -r, --root <path>          root path
  -c, --category <category>  Question category
  -t, --tag <tag>            Question tag
  -h, --help                 Display this message
```

### Usage

I. batch generate questions with reading specfic file path

```bash
dz-leetcode batch example/question.yml
```

Configuration file usage

```yml
questions:
  - name: two-sum
  - category: algorithms #option
  - tag: array #option
```

II. generate a single question with question title

```bash
dz-leetcode single two-sum
#or
dz-leetcode single two-sum -c algorithms
#or
dz-leetcode single two-sum -c algorithms -t array
```

**WIP**

[ ] generate by question id
