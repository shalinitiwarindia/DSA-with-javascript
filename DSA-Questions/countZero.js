function countZerosOnesTwos(N,arr){
    //write code here
    let countZero=0;
    for(let i=0;i<N;i++){
        if(arr[i]===0){
            countZero+=arr[i];
            countZero++;
         }
    }
    console.log(countZero);
}
