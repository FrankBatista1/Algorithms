const countUniqueValues = (array) => {
  // check if array has 1 or more numbers
  if (array.length === 1) return 1;
  if (array.length === 0) return 0;   
  // create the two pointers to index 0 and 1
  let idx1 = 0;
  let idx2 = 1;
  // create a counter = 1; 
  let counter = 1; 
  // while second > array length - 1 
  while (idx2 <= array.length - 1){
    //first === second? if yes => second++ if no => first = second && second++;
    if (array[idx1] === array[idx2]){
      idx2++;
    } else {
      idx1 = idx2;
      idx2++;
      counter++;
    }
  } 
  // return counter
  return counter;
}
