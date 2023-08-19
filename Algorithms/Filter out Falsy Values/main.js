function bouncer(arr) {
  let filteredArray = [];
  for(let i=0;i<arr.length;i++){
    if(arr[i]){ //arr[i] conds means if true
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}

bouncer([7, "ate", "", false, 9]);
