class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findLoop(head) {
  let firstPointer = head.next;
  let secondPointer = head.next.next;
  while (firstPointer !== secondPointer){
    firstPointer = firstPointer.next;
    secondPointer = secondPointer.next.next;
  }
  firstPointer = head
  while (firstPointer !== secondPointer){
    firstPointer = first.next;
    secondPointer = secondPointer.next;
  }
  return firstPointer;
}