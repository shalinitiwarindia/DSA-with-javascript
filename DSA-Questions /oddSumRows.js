function oddSumRows(N,M,arr){
    //write code here
    let rowSums=[];
    for(let i=0;i<arr.length;i++){
        let sum=0;
        for(let j=0;j<arr[i].length;j++){
            if(arr[i][j]%2!==0){
              sum+=arr[i][j];  
            }
            
          }
          rowSums.push(sum);
    }
    console.log(rowSums.join(" "));
}
