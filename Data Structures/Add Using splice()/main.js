//The splice() method adds and/or removes array elements
function htmlColorNames(arr) {
  arr.splice(0,2, 'DarkSalmon', 'BlanchedAlmond')
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
