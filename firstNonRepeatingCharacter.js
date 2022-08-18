function firstNonRepeatingCharacter(string) {
  const timesRepeated = {};

 for (const character of string){
   if (!(character in timesRepeated)) timesRepeated[character] = 0;
   timesRepeated[character]++;
 }


 for (const character of string){
   if (timesRepeated[character] === 1) return string.indexOf(character);
 }
 return -1;
}
