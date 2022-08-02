/*
 * @lc app=leetcode.cn id=542 lang=colavascript
 *
 * [542] 01 矩阵
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const m = mat.length
    const n = mat[0].length
    const stack = []
    const dist = new Array(m).fill(new Array(n).fill(0))
    const seen = new Array(m).fill(new Array(n).fill(false))
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                seen[i][j] = true
                stack.push({ row: i, col: j })
            }
        }
    }
    while (stack.length) {
        let { row, col } = stack.pop()
        [
            { row: row - 1, col },
            { row: row + 1, col },
            { row, col: col - 1 },
            { row, col: col + 1 }
        ].forEach(({ r, c }) => {
            if (r >= 0 && c >= 0 && r < m && c < m && !seen[r][c]) {
                dist[r][c] = dist[r][c] + 1
                stack.push({ row: r, col: c })
                seen[r][c] = true
            }
        });
    }
};
// @lc code=end

