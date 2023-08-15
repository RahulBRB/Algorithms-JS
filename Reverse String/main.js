function reverseString(str){
  let reversedArray=[];
  let lengthOfString=str.length;
  for(let i=lengthOfString-1; i>=0;i--){
   reversedArray.push(str[i]);
  }
  let result = reversedArray.join('');
  return result;

}
reverseString("hello");
