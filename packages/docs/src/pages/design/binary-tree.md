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
class TreeNode<T = number> {
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
class BinaryTree<T = number> {


  constructor() {
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

Stack

```ts

```

Recursive

```ts

```

### Inorder Traversal

Stack

```ts

```

Recursive

```ts

```

### Postorder Traversal

Stack

```ts

```

Recursive

```ts

```

## Related Questions

- [Binary Tree Inorder Traversal](/structures/tree/094)
- [Binary Tree Preorder Traversal](/structures/tree/144)
- [Binary Tree Postorder Traversal](/structures/tree/145)
