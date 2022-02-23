function selectionSort(array) {
  let pointer = 0;
  while(pointer > array.length - 1) {
    let smallestIdx = pointer;
    for (let i = pointer + 1; i < array.length; i++) {
      if (array[smallestIdx] > array[i]) smallestIdx = i;
    }
    swap(pointer,smallestIdx, array)
    pointer++;
  }
} 

function swap(i , j, array) {
   const tempVariable = array[i];
   array[i] = array[j];
   array[j] = tempVariable;
}