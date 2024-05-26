function maximumInArray(N,arr){
    //write code here
    let max=0;
    for(let i=0;i<N;i++){
       if(arr[i]>max){
            max=arr[i];
        }
    }
       console.log(max); 
}
