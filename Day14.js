// Implement a stack API using only a heap. A stack implements the following methods:

// push(item), which adds an element to the stack
// pop(), which removes and returns the most recently added element (or throws an error if there is nothing on the stack)
// Recall that a heap has the following operations:

// push(item), which adds a new key to the heap
// pop(), which removes and returns the max value of the heap

class Stack {
  constructor() {
    this.elements = [];
  }

  push() {}

  pop() {}

  isEmpty() {
    return this.elements.length === 0 ? true : false;
  }

  size() {
    return this.elements.length;
  }
}

const stack = new Stack();
stack.push(5);
stack.push(3);
stack.push(1);
stack.pop();
stack.push(9);
stack.pop();
