function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a, b) => b - a);
  blueShirtHeights.sort((a, b) => b - a);

  //Which one will be in front?
  let blueShirtInFront = false;

  for(let i = 0; i < redShirtHeights.length; i++){
    if (redShirtHeights[i] > blueShirtHeights[i]){
      blueShirtInFront = true;
      break;
    } else if (redShirtHeights[i] < blueShirtHeights[i]){
      break;
    } else {
      return false;
    }
  }
   if (blueShirtInFront){
      for(let i = 0; i < redShirtHeights.length; i++) {
        if (blueShirtHeights[i] >= redShirtHeights[i]) return false;
      }
   } else {
     for(let i = 0; i < redShirtHeights.length; i++) {
       if (blueShirtHeights[i] <= redShirtHeights[i]) return false;
     }
   }

  return true;
}
