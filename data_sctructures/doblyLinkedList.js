const util = require("util");

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoblyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

const dobleLinked = new DoblyLinkedList();

dobleLinked.push(3);
dobleLinked.push(5);
dobleLinked.push(7);
dobleLinked.push(2);
dobleLinked.push(1);

console.log(util.inspect(dobleLinked, false, null, true));
