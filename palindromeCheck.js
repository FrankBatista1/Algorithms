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

// recursive less code

function isPalindrome(word){
  // if the first letter is not equal than the last return false
  if (word[0] !== word[word.length - 1] || !word) return false;
  // call isPalindrome with the sliced word
   return word.slice(1, -1) ? isPalindrome(word.slice(1, -1)) : true;
}