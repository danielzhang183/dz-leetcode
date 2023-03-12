export function reconstructQueue(people: number[][]): number[][] {
  people.sort((a, b) => (b[0] - a[0]) || (a[1] - b[1]))

  const ans: number[][] = []
  for (let i = 0; i < people.length; i++)
    ans.splice(people[i][1], 0, people[i])

  return ans
}

reconstructQueue([[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]])
