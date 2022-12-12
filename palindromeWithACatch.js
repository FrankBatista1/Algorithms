function checkPart(part) {
  let pointer1 = 0;
  let pointer2 = part.length - 1;
  let wordsDeleted = 0;
  while (pointer1 <= pointer2){
    if (part[pointer1] === part[pointer2]){
      pointer1++;
      pointer2--;
    } else if (part[pointer1] === part[pointer2 - 1] && wordsDeleted === 0){
      pointer2--;
    } else if (part[pointer1 + 1] === part[pointer2] && wordsDeleted === 0){
      pointer1++;
    } else {
      return false;
    }
  }
  return true;
}