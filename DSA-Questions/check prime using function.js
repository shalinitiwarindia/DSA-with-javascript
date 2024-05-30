function isPrime(num){
  var factors = 0;

  for(var i = 1; i<=num; i++){
    if(num%i == 0){
      factors++
    }
  }

  if(factors==2){
      return(num+" is Prime");
  }
  else{
    return(num+" is Not Prime");
  }
}

console.log(isPrime(5));
console.log(isPrime(18));
console.log(isPrime(25));
