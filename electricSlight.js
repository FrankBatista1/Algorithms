function selectSleigh(distance, sleighs) {
  let currentBestSlight = null;
;    for(let sleigh of sleighs){
      if(sleigh.consumption * distance <= 20 ){
        currentBestSlight = sleigh.name;
      } else {
        return currentBestSlight;
      }  
    } 
    return currentBestSlight;
}