const util = require("util");

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return null;
    let current = this.head;
    let tailRemoved = null;
    while (current) {
      if (current.next === this.tail) {
        tailRemoved = current.next;
        current.next = null;
        this.tail = current;
        this.length--;
        return tailRemoved;
      }
      if (this.length <= 1) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        return null;
      }
      current = current.next;
    }
  }
  shift() {
    if (!this.head) return null;
    let removedHead = this.head;
    this.head = this.head.next;
    if ((this.length = 1)) this.tail = null;
    this.length--;
    return removedHead;
  }
  unshift(val) {
    const newHead = new Node(val);
    let currentHead = this.head;
    this.head = newHead;
    if (this.length === 0) this.tail = newHead;
    this.head.next = currentHead;
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let iterations = 0;
    let node = this.head;
    while (iterations < index) {
      node = node.next;
      iterations++;
    }
    return node;
  }
  set(val, index) {
    const nodeFound = this.get(index);
    if (nodeFound) {
      nodeFound.val = val;
      return true;
    }
    return false;
  }
  insert(val, index) {
    const nodePre = this.get(index - 1);
    const newNode = new Node(val);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return true;
    }
    if (!nodePre) return false;
    const nodeAft = nodePre.next;
    nodePre.next = newNode;
    newNode.next = nodeAft;
    this.length++;
    return true;
  }
  remove(index) {
    if (index === 0) !!this.shift();
    if (index === this.length - 1) !!this.pop();
    let prev = this.get(index - 1);
    if (prev && prev.next) {
      let removed = prev.next;
      prev.next = removed.next;
      this.length--;
      return removed;
    }
    return null;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail; 
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}
