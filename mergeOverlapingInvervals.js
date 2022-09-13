function mergeOverlappingIntervals(array) {
  const sortedIntervals = array.sort((a, b) => b[0] - a[0]);
  let lowerIntervalValue = null;
  const newArray = []
  for (let i = 0; i < sortedIntervals.length - 1; i++){
    const currentInvertal = sortedIntervals[i];
    const nextInterval = sortedIntervals[i + 1];
    if (currentInvertal[1] < nextInterval[0] && lowerIntervalValue === null){
      newArray.push(currentInvertal);
    } else if (currentInvertal[1] >= nextInterval[0] && lowerIntervalValue === null){
      lowerIntervalValue = currentInvertal[0];
    } else if (currentInvertal[1] < nextInterval[0]){
      newArray.push(lowerIntervalValue, currentInvertal[1]);
      lowerIntervalValue = null;
    }
  }
  return newArray;
}