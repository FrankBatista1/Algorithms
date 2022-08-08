// O(n) time || O(1) space
function getNthFib(n) {
  const lastTwo = [0, 1];
  let counter = 3;

  while (counter <= n) {
    const nextFib = lastIwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter++;
  }
  return n > 1 ? lastTwo[1] : lastTwo[0];
}

//Quick implemetation using memoization
//O(n) time || O(n) space

function getNthFib(n, memoize = {1: 0 ,2: 1}) {
  if (n in memoize){
    return memoize[n];
  } else {
   memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize); 
    return memoize[n];
  }
}
