// A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.
// Given the root to a binary tree, count the number of unival subtrees.
// For example, the following tree has 5 unival subtrees:

//     0
//  .     .
// 1       0
//      .     .
//     1       0
//  .     .
// 1       1

class Node {
  constructor(value = null, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

let count = 0;

function findUnivalTreeNumber(head) {
  if (!head) return true;

  const isLeftUnival = findUnivalTreeNumber(head.left);
  const isRightUnival = findUnivalTreeNumber(head.right);

  if (!isLeftUnival || !isRightUnival) return false;

  if (head.left && head.left.value !== head.value) return false;

  if (head.right && head.right.value !== head.value) return false;

  count += 1;
  return true;
}

const head = new Node(0);
head.left = new Node(1);
head.right = new Node(0);
head.right.left = new Node(1);
head.right.right = new Node(0);
head.right.left.left = new Node(1);
head.right.left.right = new Node(1);

findUnivalTreeNumber(head);
console.log(count);
