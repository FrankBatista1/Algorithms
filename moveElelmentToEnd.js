//Being asked to write a function with 2 arguments one is an array of integers and the other is an integer.
//The function should return the mutated array sorted in order that all integers equal to the one given are at the end of the array


//O(N) T | O(1) S

function moveElementToEnd(array, toMove) {
  let i = 0;
	let j = array.length - 1;
	while (i < j){
		while (i < j && array[j] === toMove) j--;
		if (array[i] === toMove) swap (i,j,array);
		i++;
	}
	return array;
}

function swap (i, j, array){
	const temp = array[j];
	array[j] = array[i];
	array[i] = temp;
}
