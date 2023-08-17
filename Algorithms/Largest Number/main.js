function largestOfFour(arr) {
  let result = [];

  // Loop through the main array (array of arrays)
  for (let i = 0; i < arr.length; i++) {
    let largestNum = arr[i][0]; // Initialize the largest number with the first element of the sub-array

    // Loop through the sub-array to find the largest number
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNum) {
        largestNum = arr[i][j]; // Update largestNum if a larger element is found
      }
    }

    // Store the largest number of the current sub-array in the result array
    result[i] = largestNum;
  }

  // Return the array containing the largest numbers from each sub-array
  return result;
}

// Call the function with a test input
largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);
