---
title: Binary Tree
description: Common Data Structure
date: 2023-02-23T16:00:00.000+00:00
type: Tree
lang: en
duration: 30min
---

[[toc]]

## Structure

### TreeNode

```ts
export class TreeNode<T = number | null> {
  val: T
  left: TreeNode<T> | null
  right: TreeNode<T> | null

  constructor(val?: T, left?: TreeNode<T> | null, right?: TreeNode<T> | null) {
    this.val = (val === undefined ? 0 : val) as T
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}
```

### Binary Tree

```ts
export class BinaryTree<T = number | null> {
  #root: TreeNode<T> | null = null
  #height = 0

  constructor(value?: T[]) {
    this.clear()

    if (Array.isArray(value))
      this.createByLayer(value)
  }

  add(value: T) {
    const treeNode = new TreeNode(value)

    if (this.#root) {
      //
    }
    else {
      this.#root = treeNode
    }
  }

  createByLayer(value: T[]) {
    if (!value.length)
      return null

    const root = new TreeNode<T>(value[0])
    const stack: TreeNode<T>[] = [root]
    let i = 1
    while (i < value.length) {
      let len = stack.length
      while (len--) {
        this.#height++
        const curr = stack.shift()!
        if (value[i] != null) {
          curr.left = new TreeNode<T>(value[i])
          stack.push(curr.left)
        }
        i++
        if (value[i] != null) {
          curr.right = new TreeNode<T>(value[i])
          stack.push(curr.right)
        }
        i++
      }
    }

    this.#root = root
  }

  clear() {
    this.#root = null
    this.#height = 0
  }

  get height() {
    return this.#height
  }

  get val() {
    return this.#root
  }
}
```

## Binary Tree Traversals

Tree Traversal algorithms can be classified broadly into two categories:

- Depth-First Search (DFS) Algorithms
- Breadth-First Search (BFS) Algorithms

Depth-First Search (DFS) algorithm can be further classified into three categories：

- Preorder Traversal (root-left-right)
- Inorder Traversal (left-root-right)
- Postorder Traversal (left-right-root)

### Preorder Traversal

#### Recursive

```ts
export function preorderTraversal(root: TreeNode | null): number[] {
  const ans: number[] = []
  const preorder = (root: TreeNode | null) => {
    if (root == null)
      return

    ans.push(root.val!)
    preorder(root.left)
    preorder(root.right)
  }

  preorder(root)
  return ans
}
```

#### Traverse

```ts
export function preorderTraversal(root: TreeNode | null): number[] {
  const ans: number[] = []
  const stack: TreeNode[] = []
  let curr = root
  while (stack.length || curr != null) {
    while (curr != null) {
      ans.push(curr.val!)
      stack.push(curr)
      curr = curr.left
    }

    if (stack.length) {
      curr = stack.pop()!
      curr = curr.right
    }
  }

  return ans
}
```

#### Morris Traverse

```ts
export function preorderTraversal(root: TreeNode | null): number[] {
  const ans: number[] = []
  let predecessor: TreeNode | null = null

  while (root) {
    if (root.left) {
      predecessor = root.left
      while (predecessor.right != null && predecessor.right !== root)
        predecessor = predecessor.right

      if (predecessor!.right == null) {
        ans.push(root.val!)
        predecessor!.right = root
        root = root.left
      }
      else {
        predecessor!.right = null
        root = root.right
      }
    }
    else {
      ans.push(root.val!)
      root = root.right
    }
  }

  return ans
}
```

### Inorder Traversal

#### Recursive

```ts
export function inorderTraversal(root: TreeNode | null): number[] {
  const ans: number[] = []

  const inorder = (root: TreeNode | null) => {
    if (root == null)
      return

    inorder(root.left)
    ans.push(root.val!)
    inorder(root.right)
  }

  inorder(root)
  return ans
}
```

#### Traverse

```ts
export function inorderTraversal(root: TreeNode | null): number[] {
  const ans: number[] = []
  const stack: TreeNode[] = []
  let curr = root

  while (curr || stack.length) {
    while (curr) {
      stack.push(curr)
      curr = curr.left
    }
    curr = stack.pop()!
    ans.push(curr.val!)
    curr = curr.right
  }

  return ans
}
```

#### Morris

```ts
export function inorderTraversal(root: TreeNode | null): number[] {
  const ans: number[] = []
  let predecessor: TreeNode | null = null
  while (root) {
    if (root.left) {
      predecessor = root.left
      while (predecessor.right != null && predecessor.right !== root)
        predecessor = predecessor.right

      if (predecessor!.right == null) {
        predecessor!.right = root
        root = root.left
      }
      else {
        ans.push(root.val!)
        predecessor!.right = null
        root = root.right
      }
    }
    else {
      ans.push(root.val!)
      root = root.right
    }
  }

  return ans
}
```

### Postorder Traversal

#### Recursive

```ts
function postorderTraversal(root: TreeNode | null): number[] {
  const ans: number[] = []
  const postorder = (root: TreeNode | null) => {
    if (root == null)
      return

    postorder(root.left)
    postorder(root.right)
    ans.push(root.val!)
  }

  postorder(root)
  return ans
}
```

#### Traverse

```ts
function postorderTraversal(root: TreeNode | null): number[] {
  const ans: number[] = []
  const stack = []
  let prev: TreeNode | null = null
  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }

    root = stack.pop()!
    if (root.right == null || root.right === prev) {
      ans.push(root.val!)
      prev = root
      root = null
    }
    else {
      stack.push(root)
      root = root.right
    }
  }

  return ans
}
```

#### Morris Traverse

```ts
function postorderTraversal(root: TreeNode | null): number[] {

}
```

## Related Questions

- [Binary Tree Inorder Traversal](/structures/tree/094)
- [Binary Tree Preorder Traversal](/structures/tree/144)
- [Binary Tree Postorder Traversal](/structures/tree/145)
