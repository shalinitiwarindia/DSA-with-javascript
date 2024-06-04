function countZerosOnesTwos(N,arr){
    //write code here
    let countZero=0;
    let countOne=0;
    let countTwo=0;
    for(let i=0;i<N;i++){
        if(arr[i]===0){
           countZero++;
         }
          else if(arr[i]===1){
             countOne++;
         }else if(arr[i]===2){
             countTwo++;
         }
    }
    console.log(countZero);
    console.log(countOne);
    console.log(countTwo);
}
