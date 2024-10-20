var a=[
  [1,2,3],
  [4,5,6],
  [7,8,9]
];
var rows=a.length;
var cols=a[0].length;

for(let i=0;i<=rows-1;i++){
  var output=" ";
  for(let j=cols-1;j>=0;j--){
    output+=a[i][j]+" ";
  }
  console.log(output);
}

// output
//  3 2 1 
//  6 5 4 
//  9 8 7 
