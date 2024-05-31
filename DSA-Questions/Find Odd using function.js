function isOdd(num){
  return num%2===1;
}

// for(var i=0; i<=10; i++){
//   console.log(isOdd(i)?(i+" - odd"):(i+" - even"));
// }
for(var i=0; i<=25; i++){
  if(isOdd(i)) {
    console.log(i+" - odd");
  } else {
    console.log(i+" - even");
  }
}
