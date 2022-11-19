// Time complexity O(n)
// Space complexity O(n) 

const validAnagram = (word1, word2) => {
  // check if the length is the same (same letters)
  if (word1.length !== word2.length) return false;
  // convert the 2 words in objects with their letter frequency
  const word1Frequency = {};
  const word2Frequency = {};
  for (let letter of word1) {
      if (letter in word1Frequency){
          word1Frequency[letter]++;
      } else {
          word1Frequency[letter] = 1;
      }
      
  }
  for (let letter of word2) {
      if (letter in word2Frequency){
          word2Frequency[letter]++;
      } else {
          word2Frequency[letter] = 1;
      }
  }
  // compare the 2 objects
  for (let letter in word1Frequency){
      if (letter in word2Frequency){
          if (word1Frequency[letter] !== word2Frequency[letter]) return false;
      } else {
          return false;
      }
  };
  return true;
}





