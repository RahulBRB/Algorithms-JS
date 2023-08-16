function findLongestWordLength(str){
  let words = str.split(" ");
  let longestWord=0;

  for(let i=0;i<words.length;i++){
    let wordArray = words[i];
    let wordLength=wordArray.length;
    if(wordLength>longestWord){
      longestWord=wordLength;
    }
  }
  return longestWord;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
