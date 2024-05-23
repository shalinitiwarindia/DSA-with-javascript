function yourFirstPattern(n) {
    // Write code here
   for(let i=1; i<=n; i++){
       var bag="";
       for(var j=1; j<=n;j++){
           bag=bag+"* ";
       }
       console.log(bag);
   }
}
