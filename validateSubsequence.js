// O(n) | O(1)

const validateSubsequence = (array, sequence) => {
  let seqIdx = 0; 
  for (const value of array ){
    if(seqIdx === sequence.length) break; 
    if(sequence[seqIdx] === value) seqIdx++;
  }
  //This will return true if is a sequence and false if it's not
  return seqIdx === sequence.length
}
