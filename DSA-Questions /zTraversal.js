function zTraversal(N,arr){
    //write code here
    let bag="";
  for(let i=0;i<arr.length;i++){
     bag+=arr[0][i]+" ";
     
  }
  for(let i=arr.length-2;i>0;i--){
      bag+=arr[i][i]+" ";
      
  }
  for(let i=0;i<arr.length;i++){
      bag+=arr[2][i]+" ";
  }
  console.log(bag);
  
}
