function someRecursive(array, callback, i = 0){
  if (i === array.length) return false;
return callback(array[i]) ? true : someRecursive(array, callback, i + 1)
}