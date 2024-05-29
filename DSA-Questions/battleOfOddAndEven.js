function battleOfOddAndEven(n, arr){
    //write code here
    let sumEven=0;
    let sumOdd=0;
    for(let i=0;i<n;i++){
        if(arr[i]%2==0){
            sumEven+=arr[i];
        }
        if(arr[i]%2!=0){
            sumOdd+=arr[i];
        }
    }
        if(sumEven>sumOdd){
            console.log("Even");
        }else{
            console.log("Odd");
        }
}
