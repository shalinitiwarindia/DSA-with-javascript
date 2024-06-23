function mapCharAgain(N) {
    // Write code here
 var lower = "abcdefghijklmnopqrstuvwxyz";
 var obj = {};
 for(let i=0; i<lower.length;i++){
    obj[lower[i]]=i+N;
}
 console.log(obj);
}
