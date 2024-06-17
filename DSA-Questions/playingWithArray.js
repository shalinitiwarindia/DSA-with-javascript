function playingWithArray(N, arr){
    let x=0;
    let y=0;
    for(let i=0;i<arr.length;i++){
        if(i%2==0){
            x+=arr[i];
        }else{
            y+=arr[i];
        }
    }
    console.log(x*y);
}
