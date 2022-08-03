/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
  if (!root)
    return []
  const queue = [root]
  const answer = []
  while (queue.length) {
    const temp = []
    let size = queue.length
    while (size--) {
      const cur = queue.shift()
      temp.push(cur.val)
      if (cur.left)
        queue.push(cur.left)
      if (cur.right)
        queue.push(cur.right)
    }
    answer.push(temp)
  }
  return answer
}
// @lc code=end

