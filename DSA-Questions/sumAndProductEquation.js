function sumAndProductEquation(N, arr) {
  //write yur code here
  //find the value of 3*x + 2*y
  let product=1;
  let sum=0;
  for(let k=0;k<N;k++){
      product=product*arr[k];
  }
  
  for(let i=0;i<N;i++){
      sum+=arr[i];
  }
  let equation = 3*product+2*sum;
  console.log(equation);
}
