// O(nlogn) T || O(1) S 
function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b);
  let currentNCC = 0;
  for (let i = 0; i < coins.length; i++){
    if (currentNCC + 1 >= coins[i]){
      currentNCC += coins[i];
    } else {
      return currentNCC + 1;
    }
  }
  return currentNCC + 1;
}