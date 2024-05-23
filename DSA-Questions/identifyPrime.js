function identifyPrime(num) {
    // Write code here
    var factor=0;
    for(var i=1; i<=num; i++){
        if(num%i==0){
            factor++;
        }
    }
        if(factor==2){
            console.log(num,"Yes");
        }
        else{
            console.log(num,"No");
        }
}
