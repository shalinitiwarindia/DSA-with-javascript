function sumOfSpecialPairs(N,A){
    var final_sum=0;
    for(var i=0;i<N;i++){
        for(var j=i+1;j<N;j++){
            if(isPrime(j-i)){
                diff = Math.abs(A[i]-A[j]);
                final_sum+=diff;
            }
        }
    }
    console.log(final_sum);
}
function isPrime(num){
    var factors=0;
    for(var i=1;i<=num;i++){
        if(num%i==0){
            factors++;
        }
    }
    if(factors==2){
        return true;
    }else{
        return false;
    }
}
