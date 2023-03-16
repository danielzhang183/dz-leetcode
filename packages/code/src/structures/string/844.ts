export function backspaceCompare1(s: string, t: string): boolean {
  const backspace = (arr: string[]) => {
    const stack: string[] = []
    arr.forEach(i => i === '#' ? stack.pop() : stack.push(i))
    return stack.join('')
  }

  return backspace([...s]) === backspace([...t])
}

export function backspaceCompare(s: string, t: string): boolean {
  let i = s.length - 1
  let j = t.length - 1
  let skipS = 0
  let skipT = 0

  while (1) {
    while (i >= 0) {
      if (s[i] === '#') {
        skipS++
      }
      else {
        if (skipS > 0)
          skipS--
        else
          break
      }
      i--
    }

    while (j >= 0) {
      if (t[j] === '#') {
        skipT++
      }
      else {
        if (skipT > 0)
          skipT--
        else
          break
      }
      j--
    }

    if (i < 0 || j < 0)
      break
    if (s[i] !== t[j])
      return false
    i--
    j--
  }

  return i === -1 && j === -1
}

backspaceCompare('ab#c', 'ad#c')
