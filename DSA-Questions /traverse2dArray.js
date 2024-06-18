function traverse2dArray(N, M, matrix){
    //write code here
    let sums=[];
    for(let i=0;i<matrix.length-1;i++){
        for(let j=matrix.length-1;j>=0;j--){
            sums+=matrix[j][i]+" ";
         }
    }
     console.log(sums);
}
