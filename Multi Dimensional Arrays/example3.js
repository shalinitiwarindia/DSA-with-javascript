var a=[
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
var rows=a.length;
var cols=a[0].length;

for(let i=0;i<=rows-1;i++){
  var output=" ";
  for(let j=0;j<=cols-1;j++){
    output+=a[i][j]+" ";
  }
  console.log(output);
}

//output
// 1 2 3 
// 4 5 6
// 7 8 9
