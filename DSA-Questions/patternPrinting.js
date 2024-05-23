function patternPrinting(N) {
    // Write code here
    for(let i=1; i<=N; i++){
        var bag="";
        for(let j=1;j<=i; j++){
           bag=bag+"*"; 
      }
      console.log(bag);
    }
}
