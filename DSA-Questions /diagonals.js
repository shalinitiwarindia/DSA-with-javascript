var matrix=[
              ['A', 'B', 'C'],
              ['D', 'E', 'F'],
              ['G', 'H', 'I']
]
let row=matrix.length;
let col=matrix[0].length;
let sum=[];
let sum1=[];
for(var i=0;i<=row-1;i++){
  for(var j=0;j<=col-1;j++){
    if(i==j){
      sum.push(matrix[i][j]+" ");
    }
    if(i+j==col-1){
      sum1.push(matrix[i][j]+" ")
    }
  }
}
console.log(sum)
console.log(sum1)
