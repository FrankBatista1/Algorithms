function minimumCharactersForWords(words) {
  const frequenciesOfCharacters = {};
  for (word of words){
    const characterFrequency = {};
    for (let i = 0; i < word.length; i++){
      if (!(word[i] in characterFrequency)) characterFrequency[word[i]] = 0;
      characterFrequency[word[i]]++;
    }
    for (character in characterFrequency){
      if (!(character in frequenciesOfCharacters)){
        frequenciesOfCharacters[character] = characterFrequency[character];        
      } else if (characterFrequency[character] > frequenciesOfCharacters[character]) {
        frequenciesOfCharacters[character] = characterFrequency[character]; 
      }
    }
  }
  return makeArrayFromCharacterFrequencies(frequenciesOfCharacters);
}

function makeArrayFromCharacterFrequencies(characterFrequencies){
  const characters = [];

  for (const character in characterFrequencies){
    const frequency = characterFrequencies[character];

    for(let i = 0; i < frequency; i++){
      characters.push(character)
    }
  }
  return characters;
}
