function twoNumSum(array, target){
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.lenght - 1
  while (left < right) {
    const currentSum = array[left] + array[right];
    if(currentSum === target) {
      return [array[left],  array[right]]
    } else if (currentSum < target){
      left++;
    }else if (currentSum > target) {
      right --;
    }
  }
  return [];
}

const numbers = [1,3,3,2,5]

twoNumSum(numbers, 5);

