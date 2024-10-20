function evenSumColumns(N,M,arr){
    //write code here
    let colSums=[];
    for(let i=0;i<arr.length;i++){
        let sum=0;
        for(let j=0;j<arr[i].length;j++){
            if(arr[j][i]%2===0){
             sum+=arr[j][i];   
            }
            
          }
          colSums.push(sum);
    }
    console.log(colSums.join(" "));
}
