function isMonotonic(array) {
  let nonDecreasing = true;
  let nonIncreasing = true;
  let idx = 0;
  while ((nonDecreasing === true || nonIncreasing === true) && idx < array.length - 1) {
    if (array[idx] < array[idx + 1]){
      nonDecreasing = false; 
    } else if (array[idx] > array[idx + 1]){
      nonIncreasing = false;
    }
    idx++;
  }
  return nonDecreasing || nonIncreasing;
}