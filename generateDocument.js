function generateDocument(characters, document) {
  const characterFrequency = {};
  for (const character of characters) {
    if (!(character in characterFrequency)) characterFrequency[character] = 0;
    characterFrequency[character]++;
  }
  for (const character of document) {
    if (!(character in characterFrequency) || characterFrequency[character] === 0) return false;
    characterFrequency[character]--;
  }
  return true;
}

// O(1) Space

function generateDocument(characters, document) {
  for (const character of document) {
    const documentFrequency = countCharacterFrequency(character, document);
    const characterFrequency = countCharacterFrequency(character, characters);
    if (documentFrequency > characterFrequency) return false;
  }
  return true;
}

function countCharacterFrequency(character, target) {
  let frequency = 0; 
  for (const char of target) {
    if (char === character) frequency++;
  }
  return frequency;
}
