function repeatStringNumTimes(str, n) {
  let newStr = "";
  
  // Loop from 0 to n-1
  for (let i = 0; i < n; i++) {
    newStr += str; // Concatenate str to newStr
  }
  
  return newStr; // Return the final concatenated string
}

// Test the function
repeatStringNumTimes("abc", 3);
