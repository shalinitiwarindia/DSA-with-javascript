function sumRelatedProblem(N) {
    // Write code here
    sum=0;
    for(let i=1; i<=N; i++){
        if(i%2==0){
            sum=sum+i;
        }
    }
    console.log(sum);
}
