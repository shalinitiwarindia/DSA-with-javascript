//Nested loop in 2D array
var items=[
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
];
var rows=items.length;
var cols=items[0].length;
for(var i=0;i<=cols-1;i++){
  var object=[];
  for(var j=0;j<=rows-1;j++){
    object=object+items[j][i] +" ";
  }
  console.log(object);
}
// print the following output
// 1 5 9 
// 2 6 10
// 3 7 11 
// 4 8 12
