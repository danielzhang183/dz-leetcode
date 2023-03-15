export function reverseWords1(s: string): string {
  const arr = [...s]
  const removeExtraSpaces = (arr: string[]) => {
    let slow = 0
    let fast = 0
    while (fast < arr.length) {
      if (arr[fast] === ' ' && (fast === 0 || arr[fast - 1] === ' '))
        fast++
      else
        arr[slow++] = arr[fast++]
    }

    arr.length = arr[slow - 1] === ' ' ? slow - 1 : slow
  }

  const reverse = (arr: string[], start: number, end: number) => {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]]
      start++
      end--
    }
  }

  const reverseEachWord = (arr: string[]) => {
    const len = arr.length
    let start = 0
    let end = 0
    while (start < len) {
      while (end < len && arr[end] !== ' ')
        end++
      reverse(arr, start, end - 1)
      start = end + 1
      ++end
    }
  }

  // remove extra spaces
  removeExtraSpaces(arr)
  // reverse whole string
  reverse(arr, 0, arr.length - 1)
  // reverse each word
  reverseEachWord(arr)

  return arr.join('')
}

export function reverseWords(s: string): string {
  return s.trim().split(/ +/g).reverse().join(' ')
}

reverseWords('  hello world  ')
