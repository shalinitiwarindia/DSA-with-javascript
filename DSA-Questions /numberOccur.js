function numberOccur(N,arr){
//Write code here
var details={};
for(let i=0;i<arr.length;i++){
    var char=arr[i];
    if(details[char]==undefined){
        details[char]=1;
    }else{
        details[char]+=1;
    }
}
console.log(details);
}
