---
title: Heap
description: Common Data Structure
date: 2023-03-01T16:00:00.000+00:00
type: Heap
lang: en
duration: 30min
---

[[toc]]

> It is a special tree-based data structure in which the tree is **a completed binary tree**.

## Types

### Max Heap

> In this heap, the value of the root node must be the **greatest** among all its child nodes and the same thing must be done for its left and right sub-tree also.

### Min Heap

> In this heap, the value of the root node must be the **smallest** among all its child nodes and the same thing must be done for its left ans right sub-tree also.

## Operations

### **Heapify**

It is the process to rearrange the elements to maintain the property of heap data structure. It is done when a certain node creates an imbalance in the heap due to some operations on that node.

It takes **O(log N)** to balance the tree.

- For **max-heap**, it balances in such a way that the maximum element is the root of that binary tree
- For **min-heap**, it balances in such a way that the minimum element is the root of that binary tree.

### Insertion

If we insert a new element into the heap since we are adding a new element into the heap so it will distort the properties of the heap so we need to perform the **heapify** operation so that it maintains the property of the heap.

It takes **O(logN)** time.

```txt
Assume initially heap(taking max-heap) is as follows

    8
   / \
  4   5
 / \
1   2

Now if we insert 10 into the heap

     8
   /   \
  4     5
 / \   /
1   2 10

After heapify operation final heap will be look like this

     10
   /    \
  4      8
 / \    /
1   2  5
```

### Deletion

deleting the top element of the heap or the highest priority element, and then organizing the heap and returning the element.

It takes **O(logN)** time.

```txt
Assume initially heap(taking max-heap) is as follows

    15
   /  \
  5    7
 / \
2   3

Now if we delete 15 into the heap it will be replaced by leaf node of the tree for temporary.

    3
   / \
  5   7
 /
2

After heapify operation final heap will be look like this

    7
   / \
  5   3
 /
2
```

### Peek

to check or find the most prior element in the heap, (max or min element for max and min heap).

It takes **O(log1)** time.

- getMax (max-heap) or getMin (min-heap)
- removeMax (max-heap) or removeMin (min-heap)

## Implement

## Pros & Cons

### Pros

### Cons

## Applications

### Priority Queues

Priority queues can be efficiently implemented using Binary Heap because it supports insert(), delete() and extractmax(), decreaseKey() operations in O(log N) time.

### Order statistics

The Heap data structure can be used to efficiently find the kth smallest (or largest) element in an array.

### Binomial Heap & Fibonacci Heap

Binomial Heap and Fibonacci Heap are variations of Binary Heap. These variations perform union also in O(log N) time which is an O(N) operation in Binary Heap.
