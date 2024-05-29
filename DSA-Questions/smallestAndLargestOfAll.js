function smallestAndLargestOfAll(n, arr){
    //write code here
    let smallest=0;
    let largest=0;
    for(let i=0;i<n;i++){
        if(arr[i]<=smallest){
            smallest=arr[i];
        }
     }
         console.log(smallest);
    for(let i=0;i<n;i++){
        if(arr[i]>=largest){
            largest=arr[i];
        }
   }
       console.log(largest);
}
