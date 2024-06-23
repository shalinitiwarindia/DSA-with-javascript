//Find index of array using objects
var arr =['a','b','c','d','e'];
var bag={};
for(var i=0;i<arr.length;i++){
  var c=arr[i];
  bag[c]=i;
}
console.log(bag);
