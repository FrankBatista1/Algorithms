function smallestDifference(arrayOne, arrayTwo) {
  arrayTwo.sort((a,b) => a - b);
  arrayOne.sort((a,b) => a - b);
  let idxOne = 0;
  let idxTwo = 0;
  let smallestDifference = Infinity; 
  let currentDifference = Infinity;
  let smallestPair = [];
  while(idxOne < arrayOne.length && idxTwo < arrayTwo.length){
    let firstNum = arrayOne[idxOne];
    let secondNum = arrayTwo[idxTwo];
    if (secondNum < firstNum){
      currentDifference = firstNum - secondNum;
      idxTwo++;
    } else if (firstNum < secondNum){
      currentDifference = secondNum - firstNum;
      idxOne++;
    } else {
      return [firstNum, secondNum]; 
    }
    if (smallestDifference > currentDifference){
      smallestDifference = currentDifference;
      smallestPair = [firstNum, secondNum];
    }
  }
  return smallestPair;
}