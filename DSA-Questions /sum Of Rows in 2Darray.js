function sumOfRows(N,M,arr){
    //write code here
    let rowSums=[];
    for(let i=0;i<arr.length;i++){
        let sum=0;
        for(let j=0;j<arr[i].length;j++){
            sum+=arr[i][j];
          }
          rowSums.push(sum);
    }
    console.log(rowSums.join(" "));
}
    
