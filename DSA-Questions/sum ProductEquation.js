function sumAndProductEquation(N, arr) {
  //write yur code here
  let x=1;
  let y=0;
  for(let i=1;i<=arr.length;i++){
      x=x*i;
  }
  for(let i=1;i<=arr.length;i++){
      y=y+i;
  }
  console.log(2*x+10*y);
}
