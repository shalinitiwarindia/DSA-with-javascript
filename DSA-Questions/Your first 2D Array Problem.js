function array2D(N,M,arr){
    //write code here
    
    for(let i=0;i<=N-1;i++){
        var obj=[];
        for(let j=0;j<=M-1;j++){
            obj+=arr[i][j]+" ";
        }
        console.log(obj);
    }
}
