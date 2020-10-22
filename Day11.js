// Given the head of a singly linked list, swap every two nodes and return its head.
// For example, given 1 -> 2 -> 3 -> 4, return 2 -> 1 -> 4 -> 3

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SwapPairs {
  constructor(elements) {
    this.element = elements;
    this.head = null;
  }

  createLinkedList() {
    this.head = new Node(this.element[0]);
    let k = this.head;
    for (let i = 1; i < this.element.length; i++) {
      let x = new Node(this.element[i]);
      k.next = x;
      k = x;
    }
  }

  printList() {
    let k = this.head;
    while (k) {
      console.log(k.val);
      k = k.next;
    }
  }

  swapPairs() {
    let temp = this.head;
    while (temp && temp.next) {
      let x = temp.val;
      temp.val = temp.next.val;
      temp.next.val = x;
      temp = temp.next.next;
    }
  }
}

const elements = [1, 2, 3, 4, 5];
let m = new SwapPairs(elements);
m.createLinkedList();
m.printList();
m.swapPairs();
m.printList();
