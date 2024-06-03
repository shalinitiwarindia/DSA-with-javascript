function evenCollection(max,min){
    //write code here
    let sum=0;
    for(let i=min; i<=max; i++){
        if(i%2==0){
            sum+=i;
        }
    }
    console.log(sum);
}
