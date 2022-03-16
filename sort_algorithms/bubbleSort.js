// O(n²) t | O(s) s

// is going to be comparing the first with the number next to it until we get the largest number at the end for each iteration;

function bubbleSort(array){
  let isSorted = false; 
  let counter = 0; 
  while (!isSorted){
    isSorted = true; 
    for (let i = 0; i < array.length - 1 - counter; i++){
      if (array[i] > array[i + 1]){
        swap(i, i + 1, array)
        isSorted = false;
      }
    }
    counter++;
  }
  return array;
}

function swap (i, j, array){
   const variableStorage = array[i];
   array[i] = array[j];
   array[j] = variableStorage
}