function factorialize(num) {
  let res=1;
   if(num==0){  
     return res;   
   }
   else{
     for(let i=1;i<=num;i++){

      res=res*i;
     }
     return res
   }
}

factorialize(5);
