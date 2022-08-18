function longestPeak(array) {
  let currentLongestPeak = 0;
  for (let i = 1; i < array.length; i++){
    if (array[i-1] < array[i] && array[i+1] < array[i]){
      let currentPeak = 3;
      let rightPointer = i - 1;
      let leftPointer = i - 2;
      while (array[rightPointer] > array[leftPointer]){
        leftPointer--;
        rightPointer--;
        currentPeak++;
      }
      rightPointer = i + 2;
      leftPointer = i + 1;
      while (array[rightPointer] < array[leftPointer]){
        leftPointer++;
        rightPointer++;
        currentPeak++;
      }
      if(currentPeak > currentLongestPeak){
        currentLongestPeak = currentPeak;
      }
    }
  }
  return currentLongestPeak;
}