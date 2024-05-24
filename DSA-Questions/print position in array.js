var array=[1,2,3,4,5,6];
var pos=-Infinity;
for(var i=0;i<=array.length-1;i++){
  if(array[i]>pos){
    pos=array[i];
  }
}
console.log(pos);
