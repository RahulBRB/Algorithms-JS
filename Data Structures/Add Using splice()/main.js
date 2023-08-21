//The slice() method returns selected elements in an array, as a new array. 
function htmlColorNames(arr) {
  arr.splice(0,2, 'DarkSalmon', 'BlanchedAlmond')
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
