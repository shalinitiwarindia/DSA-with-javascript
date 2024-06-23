function mapChar(N) {
    // Write code here
 var lower = "abcdefghijklmnopqrstuvwxyz";
 var obj = {};
 for(let i=0; i<N;i++){
    obj[lower[i]]=i+1;
}
 console.log(obj);

}
