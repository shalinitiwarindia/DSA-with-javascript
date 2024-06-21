function maximumOccuringElement(A,N){
    //write code here
    let frequency={};
    let max_occur=0;
    let max_num=null;
    for(let i=0;i<A.length;i++){
        let num=A[i];
        if(frequency[num]){
            frequency[num]++;
        }else{
           frequency[num]=1; 
        }
    }
    for(let num in frequency){
        if(frequency[num]>max_occur){
            max_occur=frequency[num];
            max_num=num;
        }
    }
    console.log(max_num);
}
