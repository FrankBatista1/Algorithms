function runLengthEncoding(string) {
  let encodedArray = [];
  let numberOfCurrentConsecutiveCharacters = 1;
  for(let i = 0; i < string.length; i++){
    if (string[i] === string[i + 1]){
      numberOfCurrentConsecutiveCharacters++;
    } else {
       encodedArray.push(numberOfCurrentConsecutiveCharacters);
       encodedArray.push(string[i]);
       numberOfCurrentConsecutiveCharacters = 1;
    }
    
    if (numberOfCurrentConsecutiveCharacters === 9){
      encodedArray.push(numberOfCurrentConsecutiveCharacters);
      encodedArray.push(string[i]);
      numberOfCurrentConsecutiveCharacters = 1;
      i++;
    }
  }
  encodedArray.toString()
  return encodedArray.join('');
}
