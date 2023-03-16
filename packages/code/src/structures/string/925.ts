// Two Pointers
export function isLongPressedName1(name: string, typed: string): boolean {
  let i = name.length - 1
  let j = typed.length - 1
  let repeat = name[i]
  while (1) {
    if (name[i] !== typed[j]) {
      while (typed[j] === repeat)
        j--
    }
    if (i < 0 || j < 0)
      break
    if (name[i] !== typed[j])
      return false
    repeat = typed[j]
    i--
    j--
  }

  return i === -1 && j === -1
}

export function isLongPressedName(name: string, typed: string): boolean {
  let i = 0
  let j = 0
  while (i < name.length && j < typed.length) {
    if (name[i] === typed[j]) {
      i++
      j++
    }
    else if (i > 0 && typed[j] === name[i - 1]) {
      j++
    }
    else {
      break
    }
  }

  return i === name.length && j === typed.length
}

// isLongPressedName('alex', 'aaleex')
// isLongPressedName('saeed', 'ssaaeddd')
isLongPressedName('alex', 'aaleexa')
