function nestedEvenSum (object, accumulator = 0) {
  // loop through the object
    for (const item in object){
    // check if its an even Number
      if(object[item] % 2 === 0){
          // add number to accumulator
          accumulator += object[item];
      } else if (typeof object[item] === "object"){
    // else if its an object
          // accumulator += call nestedEvenSum(item)
          accumulator += nestedEvenSum(object[item]);
      }
    }    
   // return accumulator 
      return accumulator;
  }