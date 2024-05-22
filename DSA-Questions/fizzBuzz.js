function fizzBuzz(num) {
    // Write code herei
    for(let i=1 ;i<num; i++){
       console.log(i);
    }
    if(num%3==0 && num%5==0){
        console.log("FizzBuzz");
    }
    else if(num%3==0){
        console.log("Fizz");
    }
    else if(num%5==0){
        console.log("Buzz");
    }
}
