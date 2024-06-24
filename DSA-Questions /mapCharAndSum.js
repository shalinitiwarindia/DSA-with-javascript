function mapCharAndSum(N,K,str) {
    // Write code here
    
 var lower = "abcdefghijklmnopqrstuvwxyz";
 var obj = {};
 for(let i=0; i<lower.length;i++){
    var char=lower[i];
    obj[char]=N;
    N++;
}
//console.log(obj);
let sum=0;
for(let j=0;j<str.length;j++){
    var char=str[j];
    sum+=obj[char];
}
console.log(sum);
}
