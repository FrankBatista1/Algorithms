//Resource to test the program

let arrayForTesting = [3, 5, 3, -4, 8, 11];

// O(n²) T | O(1) S
// In this solution we do a doble for loop when we sum every posible result

function twoNumSum(array, target) {
  for (let i = 0; i < array.length - 1; i++) {
    const firstSum = array[i];
    for (let j = i + 1; j < array.length; j++) {
      const secondSum = array[j];
      if (firstSum + secondSum === target) {
        return [firstSum, secondSum];
      }
    }
  }
  return [];
}

twoNumSum(arrayForTesting, 6);

// O(n) T | O(n) S
// We create a hash table where we store the result of -> target - number = checkIfInArray
// a + b = x ---> x - b = a when x is the target and b the number we are iterating

function twoNumberSum(array, targetSum) {
  const nums = {};
  for (const num of array) {
    const potentialMatch = targetSum - num;
    if (potentialMatch in nums) {
      return [potentialMatch, num];
    } else {
      nums[num] = true;
    }
  }
  return [];
}

// O(nlog(n)) T | O(1) S
// We put a pointer at the start and in the end of the sorted array and we sum them if it's larger than the target
// the pointer of the right is going down the array and if it's less than the target the pointer in the left is going up.

function twoNumberSumLessSpace(array, targetSum) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum > targetSum) {
      right--;
    } else if (currentSum < targetSum) {
      left++;
    }
  }
  return []
}

