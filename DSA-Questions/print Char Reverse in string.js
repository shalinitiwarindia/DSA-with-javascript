function printCharReverse(N,str) {
    //write code here
    let reverse=0;
    for(let i=N-1;i>=0;i--){
        reverse+=str[i];
        console.log(str[i]);
    }
}
