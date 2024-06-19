function applyBasicMaths(N,A){
    //write code here
    var total_sum=0;
    var smallest_cur=Infinity;
    var index_smallest_cur=-1;
    for(var i=0;i<N;i++){
       total_sum+=A[i]; 
    }
    for(var i=0;i<N;i++){
        var sum_without_cur=total_sum-A[i];
        if(sum_without_cur%7===0){
            smallest_cur=A[i];
            index_smallest_cur=i;
        }
    }
    console.log(index_smallest_cur);
}
