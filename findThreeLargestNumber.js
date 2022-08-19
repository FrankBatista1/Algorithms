function findThreeLargestNumbers(array) {
  let largestNumber1 = array[array.length - 1];
  let largestNumber2 = array[array.length - 2];
  let largestNumber3 = array[array.length - 3];
  for (let i = 0; i < array.length - 3; i++){
   if (array[i] > largestNumber1 || array[i] > largestNumber2 || array[i] > largestNumber3){
     switch (Math.min(largestNumber1, largestNumber2, largestNumber3)){
       case largestNumber1:
         largestNumber1 = array[i];
         break;
        case largestNumber2:
         largestNumber2 = array[i];
         break;
       case largestNumber3:
         largestNumber3 = array[i];
         break;
     }
   }
  }
  
  return [largestNumber1, largestNumber2, largestNumber3].sort((a,b) => a - b);
}
