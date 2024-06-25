function sumOfPrimeFromAToB(A,B){
   let sum = 0;
    for (let number = A; number <= B; number++) {
        if (isPrime(number)) {
            sum += number;
        }
    }
    console.log(sum);  
}

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    if (num === 2) {
        return true;
    }
    if (num % 2 === 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
