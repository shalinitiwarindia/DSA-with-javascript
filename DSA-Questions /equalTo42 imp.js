function equalTo42(size,arr) {
  let num=false;
  for(var i in arr)
      if(arr[i]==42){
          num=true;
          break;
      }
      if(num==true){
          console.log("Yes");
      }else{
          console.log("No");
      }
  
}
