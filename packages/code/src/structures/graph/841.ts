// DFS
export function canVisitAllRooms(rooms: number[][]): boolean {
  const seen: boolean[] = new Array(rooms.length).fill(false)
  const dfs = (room: number) => {
    if (seen[room])
      return
    seen[room] = true
    for (const key of rooms[room])
      dfs(key)
  }

  dfs(0)
  return seen.every(Boolean)
}

// BFS
export function canVisitAllRooms1(rooms: number[][]): boolean {
  const stack: number[][] = [rooms[0]]
  const seen: boolean[] = new Array(rooms.length).fill(false)
  seen[0] = true

  while (stack.length) {
    for (const key of stack.pop()!) {
      if (!seen[key]) {
        seen[key] = true
        stack.push(rooms[key])
      }
    }
  }

  return seen.every(Boolean)
}
