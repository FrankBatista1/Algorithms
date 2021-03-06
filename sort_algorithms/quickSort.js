// O (nlog(n)) Avg || Best
// O (n) Worst

function quickSort(array){
     quickSortHelper(array, 0, array.length - 1);
     return array;
}

function quickSortHelper(array, startIdx, endIdx){
  if (startIdx >= endIdx) return;
  pivotIdx = startIdx;
  let leftIdx = startIdx + 1; 
  let rightIdx = endIdx;
  while (rightIdx >= leftIdx){
      if(array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]){
        swap(leftIdx, rightIdx, array);
      }  
      if (array[rightIdx] >= array[pivotIdx]) rightIdx--;
      if (array[leftIdx] <= array[pivotIdx]) leftIdx++;
  }
  swap(pivotIdx, rightIdx, array);
  const leftSubarrayIsSmaller = rightIdx - 1 - startIdx < endIdx - rightIdx + 1;
  if (leftSubarrayIsSmaller){
    quickSortHelper(array, startIdx, rightIdx - 1);
    quickSortHelper(array, rightIdx + 1, endIdx);
  } else {
    quickSortHelper(array, rightIdx + 1, endIdx);
    quickSortHelper(array, startIdx, rightIdx - 1);
  }

}

function swap(i, j, array){
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}