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
  pop() {
    if (!this.head) return this;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const prevVal = this.tail.prev;
      this.tail = prevVal;
      prevVal.next = null;
    }
    this.length--;
    return this;
  }
  shift() {
    if (!this.head) return this;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const postVal = this.head.next;
      postVal.prev = null;
      this.head = postVal;
    }
    this.length--;
    return this;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
    }
    this.length++;
    this.head = newNode;
    return this;
  }
  get(index) {
    if (index > this.length - 1 || index < 0) return null;
    if (index === 0) return this.head;
    if (index === this.length - 1) return this.tail;
    let node = null;
    let current = 0;
    if (this.length - index < this.length / 2) {
      node = this.tail;
      while (current < this.length - 1 - index) {
        node = node.prev;
        current++;
      }
    } else {
      node = this.head;
      while (current < index) {
        node = node.next;
        current++;
      }
    }
    return node;
  }
  set(val, index) {
    let nodeToReplace = this.get(index);
    if (nodeToReplace) return (nodeToReplace.val = val);
    return false;
  }
  insert(val, index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    const newNode = new Node(val);
    let postNode = this.get(index);
    let preNode = postNode.prev;
    newNode.next = postNode, newNode.prev = preNode;
    postNode.prev = newNode, preNode.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.shift()
    if (index === this.length - 1) return !!this.pop()
    const nodeToRemove = this.get(index);
    let previusNode = nodeToRemove.prev;
    let postNode = nodeToRemove.next;
    previusNode.next = postNode;
    postNode.prev = previusNode;
    this.length--;
    return true;
  }
}

const dobleLinked = new DoblyLinkedList();




