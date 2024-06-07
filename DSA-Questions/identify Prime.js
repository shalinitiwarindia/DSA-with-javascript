function identifyPrime(num) {
    // Write code here
     var factors = 0;

  for(var i = 1; i<=num; i++){
    if(num%i === 0){
      factors++
    }
  }

  if(factors===2){
      console.log("Yes");
  }
  else{
    console.log("No");
  }
}
