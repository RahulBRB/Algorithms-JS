//The slice() method returns selected elements in an array, as a new array

function forecast(arr) {
  return arr.slice(2, 4);
}

console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);
