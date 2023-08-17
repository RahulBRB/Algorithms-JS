function confirmEnding(str, target) {
  // Get the length of the target string
  let targetLength = target.length;
  
  // Get the length of the input string
  let length = str.length;
  
  // Use substring to extract the portion of the string that matches the target length
  let endOfString = str.substring(length - targetLength);
  
  // Compare the extracted portion with the target string
  if (endOfString == target) {
    return true;
  } else {
    return false;
  }
}

// Test the function
console.log(confirmEnding("Bastian", "n")); // This will output: true
