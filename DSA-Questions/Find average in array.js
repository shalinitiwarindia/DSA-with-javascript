var even=[1,2,3,4,5,6,7,8,9];
var sum=0;
var av=0;
var count=0;
for(var i=0;i<=even.length;i++){
  if(even[i]%2==0){
    //count++;
    sum+=even[i];
    count++;
    av=sum/count;
    
  }
 
}

console.log(av);
