function productSum(array, depth = 1) {
  let sum = 0; 
  for (const instance of array){
    if(Array.isArray(instance)){
      sum += productSum(instance, depth + 1)
    } else {
      sum += instance;
    }
  }
   return sum * depth;
}