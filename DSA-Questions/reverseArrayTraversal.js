function reverseArrayTraversal(n, arr){
    //write code here
    let reverse=0;
    for(let i=n-1;  i>=0; i--){
        reverse=reverse+arr[i];
        console.log(arr[i]);
    }
}
