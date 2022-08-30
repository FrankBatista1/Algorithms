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