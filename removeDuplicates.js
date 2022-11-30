class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// we asume that the linked list is sorted and linkedlist is the head of the linked list 
function removeDuplicatesFromLinkedList(linkedList) {
  let node = linkedList;
  let nxt = node.next;
  while (nxt){
    if (node.value === nxt.value){
        node.next = nxt.next;
    } else {
        node = node.next;
    }
    nxt = nxt.next; 
  }
  return linkedList;
}