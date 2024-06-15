function oddSumColumns(N,M,arr){
    let oddSums=[];
    for(let i=0;i<arr.length;i++){
        let sum=0;
        for(let j=0;j<arr[i].length;j++){
            if(arr[j][i]%2!==0){
              sum+=arr[j][i];  
            }
            
          }
          oddSums.push(sum);
    }
    console.log(oddSums.join(" "));
}
