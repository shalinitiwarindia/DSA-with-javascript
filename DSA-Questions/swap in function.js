function swap(str){
  let az = "abcdefghijklmnopqrstuvwxyz";
  let AZ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var res = "";
  for(let i=0; i<str.length; i++) {
    for(let j=0; j<az.length; j++) {
      if(str[i] === AZ[j]) {
        res += az[j];
      }
    }
    for(let j=0; j<az.length; j++) {
      if(str[i] === az[j]) {
        res += AZ[j];
      }
    }
  }
  return res;
}
// let arr=["Test", "Parrot"];
// for(let k=0; k<arr.length; k++) {
//    arr[k] = swap(arr[k]);
// }
console.log(swap("Test"));
//console.log(arr);

  
