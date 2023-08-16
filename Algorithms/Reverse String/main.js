function reverseString(str) {
  let emptyArray=[];
  let length = str.length;
  for(let i=length-1;i>=0;i--){
    emptyArray.push(str[i]);
  }

  let result=emptyArray.join('');

  return result;
}

reverseString("hello");
