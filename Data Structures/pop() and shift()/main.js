// Instead of adding, pop() removes an element from the end of an array, while shift() removes an element from the beginning. 
function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}

console.log(popShift(["challenge", "is", "not", "complete"]));
