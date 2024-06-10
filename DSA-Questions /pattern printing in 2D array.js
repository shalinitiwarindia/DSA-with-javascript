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
  for(var j=cols-1;j>=0;j--){
    object=object+items[i][j] +" ";
  }
  console.log(object);
}

//print the following output
//4 3 2 1
//8 7 6 5
//12 11 10 9
