const urlAlphabet
  = 'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'

export const customAlphabet = (alphabet: string, defaultSize = 21) => {
  return (size = defaultSize) => {
    let id = ''
    let i = size
    while (i--)
      id += alphabet[(Math.random() * alphabet.length) | 0]

    return id
  }
}

export const nanoid = (size = 21) => {
  let id = ''
  let i = size
  while (i--)
    id += urlAlphabet[(Math.random() * 64) | 0]

  return id
}
