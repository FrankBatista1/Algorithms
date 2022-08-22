function caesarCipherEncryptor(string, key) {
  let newWord = [];
  let newKey = key % 26;
  for( let i = 0; i < string.length; i++){
    let unicodeValue = string.charCodeAt(i);
    for (let j = 0; j < newKey; j++){
      if (unicodeValue < 122){
        unicodeValue++;
      } else{
        unicodeValue = 97;
      }
    }
    newWord.push(unicodeValue)
  }
  return String.fromCodePoint(...newWord);
}