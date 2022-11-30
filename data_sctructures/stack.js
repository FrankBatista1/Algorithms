const util = require("util");

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }
    this.size++;
    return this;
  }
  pop() {
    if (!this.first) return null;
    const nodeToRemove = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return nodeToRemove;
  }
}

const newStack = new Stack();

newStack.push(21);
newStack.push(2);
newStack.push(43);

newStack.pop();

console.log(util.inspect(newStack, true, null, true));
