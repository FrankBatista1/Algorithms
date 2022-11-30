const util = require("util");

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val){
    const newNode = new Node(val);
    if (!this.first){
      this.first = newNode;
    } else {  
      this.last.next = newNode;
    } 
    this.last = newNode;
    this.size++;
    return newNode;
  }
  dequeue() {
    if (!this.first) return null;
    const nodeToRemove = this.first;
    if (this.size === 1){
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return nodeToRemove;
  }
}

const newQueue = new Queue();

newQueue.enqueue(21);
newQueue.enqueue(2);
newQueue.enqueue(34);
newQueue.enqueue(64);
newQueue.enqueue(123);
newQueue.dequeue();


console.log(util.inspect(newQueue, false, null, true));