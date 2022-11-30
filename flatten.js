function flatten(array){
  let newArr = []
  	for(let i = 0; i < array.length; i++){
    	if(Array.isArray(array[i])){
      		newArr = newArr.concat(flatten(array[i]))
    	} else {
      		newArr.push(array[i])
    	}
  } 
  return newArr;
}
