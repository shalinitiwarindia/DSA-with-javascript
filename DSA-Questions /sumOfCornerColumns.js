function sumOfCornerColumns(N,M,arr){
    //write code here
    let sum=0;
  for(let i=0;i<arr.length;i++){
      //console.log(arr[i]);
      for(let j=0;j<arr.length;j++){
          if(i==1){
              break;
          }
          sum+=arr[j][i];
      }
  }
  console.log(sum);
}
