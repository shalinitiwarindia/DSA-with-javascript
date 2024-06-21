function spiralTraversal(N, M, arr){
    let bag="";
  for(let i=0;i<arr.length;i++){
      bag+=arr[i][0]+" ";
  }
  for(let i=1;i<arr.length;i++){
      bag+=arr[2][i]+" ";
  }
  for(let i=arr.length-1;i>=0;i--){
      bag+=arr[i][3]+" ";
  }
  for(let i=arr.length-1;i>0;i--){
      bag+=arr[0][i]+" ";
  }
  for(let i=1;i<arr.length-1;i++){
      bag+=arr[i][1]+" ";
  }
  for(let i=2;i<arr.length;i++){
      bag+=arr[1][i]+" ";
  }
  console.log(bag);
}
