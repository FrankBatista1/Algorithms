// O(n) | O(1)

const validateSubsequence = (array, sequence) => {
  let seqIdx = 0; 
  for (const nums of array ){
    if(seqIdx === sequence.length) break; 
    if(sequence[seqIdx] === value) seqIdx++;
  }
  return seqIdx === sequence.length
}
