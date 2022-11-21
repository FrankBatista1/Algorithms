function binarySearch(array, target){
  // check if the array is empty
  if (array.length === 0) return -1;
  // put a pointer at the start and the end of the array
  let idx1 = 0;
  let idx2 = array.length;
   while (idx1 !== idx2 || array[idx2] !== target ){
      let middle = Math.round((idx1 + idx2) / 2);
      if (array[middle] === target){
          return middle;
      } else if(middle === idx2) {
        return -1;
      } else if (array[middle] > target){
          idx2 = middle;
      } else if (array[middle] < target){
          idx1 = middle;
      }
   }
   return -1;
}