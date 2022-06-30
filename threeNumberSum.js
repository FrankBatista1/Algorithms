function threeNumberSum(array, targetSum) {
<<<<<<< HEAD
  array.sort((a, b) => a - b);
  const triplets = [];
  for (let i = 0; i < array.length - 2; i++){
    let left = i + 1;
    let right = array.length - 1;
    while (left < right){
      const sum = array[i] + array[left] + array[right];
      if (sum === targetSum) {
        triplets.push([array[i], array[left], array[right]])
        left++;
        right--;
      } else if (sum > targetSum) {
        right--;
      } else if (sum < targetSum) {
        left++;
      }
    }
  }
  return triplets;
}
=======
    array.sort((a, b) => a - b);
    const triplets = [];
    for (let i = 0; i < array.length - 2; i++){
      let left = i + 1;
      let right = array.length - 1;
      while (left < right){
        const sum = array[i] + array[left] + array[right];
        if (sum === targetSum) {
          triplets.push([array[i], array[left], array[right]])
          left++;
          right--;
        } else if (sum > targetSum) {
          right--;
        } else if (sum < targetSum) {
          left++;
        }
      }
    }
    return triplets;
  }
>>>>>>> ecdceb90f9a1499b5f15322191a954b5d0b775f9
