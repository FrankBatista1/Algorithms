const checkIfPalindrome = (string) => {
    leftPointer = 0;
    rightPointer = string.length - 1;
    while (leftPointer < rightPointer) {
      if(string[leftPointer] !== string[rightPointer]) return false;
      rightPointer++;
      leftPointer--;
    }
    return true
}