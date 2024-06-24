function traverse2dArray(N, M, matrix){
    //write code here
   let sums=[];

for (let j = matrix[0].length-1; j >=0; j--) { // Loop through columns
  for (let i = 0; i <matrix.length; i++) { // Loop through rows
    sums+=matrix[i][j]+" ";
  }
}
    console.log(sums);
}
