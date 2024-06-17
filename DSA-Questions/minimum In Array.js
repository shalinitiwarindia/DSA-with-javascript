function minimumInArray(N,arr){
    //write code here
    let min=1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    console.log(min);
}
