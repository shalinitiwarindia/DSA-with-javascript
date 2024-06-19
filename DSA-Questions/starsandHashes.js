function starsandHashes(N){
	for(let i=1; i<=N; i++){
       var bag="";
       for(var j=1; j<=N;j++){
          bag=bag+"*";
       }
       if(i%2===0){
           console.log("#");
       }else{
           console.log(bag);
       }
     }
}
