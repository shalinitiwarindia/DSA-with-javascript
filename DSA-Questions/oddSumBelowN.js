function oddSumBelowN(num) {
    // Write code here
    let sum=0;
    for(let i=1; i<=num;i++){
        if(i%2==1){
            sum=sum+i;
        }
    }
    console.log(sum);
}
