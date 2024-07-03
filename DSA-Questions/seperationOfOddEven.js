function seperationOfOddEven(N, arr,Q) {
  //write code here
  let count="";
  let countOdd="";
  for(let i=0;i<arr.length;i++){
      if(arr[i]%2==0){
          count+=arr[i]+" ";
      }else if(arr[i]%2!==0){
          countOdd+=arr[i]+" ";
      }
  }if(Q==1){
      console.log(count+countOdd);
  }else{
      console.log(countOdd+count);
  }
  
}
