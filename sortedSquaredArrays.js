const arrayToTest = [-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20];

// O(n) s || t but the first algorithm more specifically iterates O(3n)
function sortedSquaredArray(array) {
  //Negative numbers in start of array
  //Divide positive and negative numbers and square
  //Reverse the negative numbers
  //Merge the two arrays by comparing the sorted values
  let negativeArray = [];
  let positiveArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      let squaredNegativeNumber = array[i] ** 2;
      negativeArray.push(squaredNegativeNumber);
    } else {
      let squaredPositiveNumber = array[i] ** 2;
      positiveArray.push(squaredPositiveNumber);
    }
  }

  negativeArray.reverse();

  function mergeTwoSortedArrays(array1, array2) {
    if (array1.length === 0) {
      return array2;
    } else if (array2.length === 0) {
      return array1;
    }
    let sortedArray = [];
    let pointer = 0;
    //array1 forloop
    //if array1 less push index then keep going
    //array2 pointer
    //if array2 less push ponter then pointer++

  
    if (array1.length >= array2.length) {
      for (let i = 0; i < array1.length; i) {
        if (array2[pointer]) {
          if (array1[i] < array2[pointer]) {
            sortedArray.push(array1[i]);
            i++;
          } else {
            sortedArray.push(array2[pointer]);
            pointer++;
          }
        } else {
          sortedArray.push(array1[i]);
          i++;
        }
      }
      while (array1[pointer]) {
        sortedArray.push(array1[pointer]);
        pointer++;
      }
    } else {
      for (let i = 0; i < array2.length; i) {
        if (array1[pointer]) {
          if (array2[i] < array1[pointer]) {
            sortedArray.push(array2[i]);
            i++;
          } else {
            sortedArray.push(array1[pointer]);
            pointer++;
          }
        } else {
          sortedArray.push(array2[i]);
          i++;
        }
      }
      while (array1[pointer]) {
        sortedArray.push(array1[pointer]);
        pointer++;
      }
    }

    return sortedArray;
  }

  return mergeTwoSortedArrays(negativeArray, positiveArray);
}
function sortedSquaredArray2(array) {
  const sortedSquares = new Array(array.length).fill(0);
	let smallerValueIdx = 0; 
	let largerValueIdx = array.length - 1;
	
	for(let idx = 0; idx < array.length ; idx++){
		const smallerValue = array[smallerValueIdx];
		const largerValue = array[largerValueIdx];
		
		if (Math.abs(smallerValue) > Math.abs(largerValue)){
			sortedSquares[array.length - idx - 1] = smallerValue ** 2;
			smallerValueIdx++;
		} else {
			sortedSquares[array.length - idx - 1] = largerValue ** 2; 
			largerValueIdx--;
		}
	}
  return sortedSquares;
}

sortedSquaredArray(arrayToTest);
sortedSquaredArray2(arrayToTest);
