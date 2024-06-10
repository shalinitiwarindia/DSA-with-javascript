//Nested loop in 2D array
var items=[
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
];
var rows=items.length;
var cols=items[0].length;
for(var i=0;i<=rows-1;i++){
  var object=[];
  for(var j=0;j<=cols-1;j++){
    object=object+items[i][j] +" ";
  }
  console.log(object);
}
