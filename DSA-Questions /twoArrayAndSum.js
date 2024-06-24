function twoArrayAndSum(n, m, matrix, s){
    //write code here
  let count=0;
  for(let i=0;i<n;i++){
      for(let j=0;j<m;j++){
          if(j<matrix[i].length-2){
              var temp=matrix[i][j]+ matrix[i][j+1] + matrix[i][j+2]; 
          }if(i<matrix.length-2){
              temp=matrix[i][j] + matrix[i+1][j] + matrix[i+2][j];
          }if(i<matrix.length-2 && j<matrix[j].length-2){
              temp=matrix[i+2][j]+matrix[i+1][j+1]+matrix[i][j+2];
          }if(i<matrix.length-2 && j<matrix.length-2){
              temp=matrix[i][j] + matrix[i+1][j+1] + matrix[i+2][j+2];
          }if(temp==s){
              count++;
          }
      }
  }
  console.log(count);
}
