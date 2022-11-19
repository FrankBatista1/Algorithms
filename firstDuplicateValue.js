function firstDuplicateValue(array) {
  // O(n) Time
  // O(n) Space
  // if array = 1 return -1
  if (array.length === 1) return -1;
  // create a hash table to store the numbers
  const duplicates = {};
  // loop through array 
  for (let number of array){
    // if number in hash table return number else object[number] = 1; 
    if (number in duplicates){
      return number
    } else {
      duplicates[number] = 1;
    };
  }
  return -1
}