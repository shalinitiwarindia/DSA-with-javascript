var items=[
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
var rows=items.length;
var cols= items[0].length;

var snake="";
for(var i=0;i<=rows-1;i++){
  if(i%2===0){
    for(var c=0;c<=cols-1;c++){
      snake+=items[i][c]+" ";

    }
  }
  else{
      for(var c=cols-1;c>=0;c--){
          snake+=items[i][c]+" ";
      }
  }
}
console.log(snake);
