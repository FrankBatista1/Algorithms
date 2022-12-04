// This is an input class. Do not edit.
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    // if  is empty then set head and tail to node
    if (!this.head) {
      this.tail = node;
    // if the node is the tail 
    } else if (node === this.tail){
    // this tail takes the node prev 
    this.tail = node.prev;
    // tail next = null
    this.tail.next = null;
    // node prev = null
    node.prev = null;
    // if the node is in the linked list already
    } else if (node.prev || node.next){
    // set the previus node next to the node next 
    node.prev.next = node.next;
    // set the next node previus to be the node previus
    node.next.prev = node.prev;
    // clean node connections
    node.next = null;
    node.prev = null;
    }
    if (this.head) {
    // else set the next value from the node to be the actual head
      node.next = this.head;
    // and the actual head prev to be the node  
      this.head.prev = node;
    }
    // finally change the head pointer to the node
    this.head = node;
    // return the whole linked list
    return this;
  }

  setTail(node) {
    // if the linked list is empty then set head and tail to node
    if (!this.head) {
      this.head = node;      
    } else {
    // else set the next value of the tail to be node
      this.tail.next = node;
    // and the node prev to be the tail
      node.prev = this.tail;
    }
    // finally change the tail pointer to the node
    this.tail = node;
    // return the whole linked list
    return this;
  }

  insertBefore(node, nodeToInsert) {
    // if the 
  }

  insertAfter(node, nodeToInsert) {
    // Write your code here.
  }

  insertAtPosition(position, nodeToInsert) {
    // Write your code here.
  }

  removeNodesWithValue(value) {
    // Write your code here.
  }

  remove(node) {
    // Write your code here.
  }

  containsNodeWithValue(value) {
    // Write your code here.
  }
}