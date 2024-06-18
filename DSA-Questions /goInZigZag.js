function goInZigZag(N, M, matrix){
var rows = matrix.length;
var cols = matrix[0].length;


for(var r=0; r<=rows-1; r++)
{

  var zigZig = "";
  if(r%2==0)
  {
    for(var c=cols-1; c>=0;c--)
    {
       zigZig  = zigZig + matrix[r][c]+" ";
    }
  }
  else
  {
    for(var c=0; c<=cols-1;c++)
    {
        zigZig = zigZig + matrix[r][c]+" ";
    }
}
  console.log(zigZig);
}
}
