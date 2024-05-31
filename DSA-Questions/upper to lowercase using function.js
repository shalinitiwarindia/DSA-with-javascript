function lowercase(str) {
  let az = "abcdefghijklmnopqrstuvwxyz";
  let AZ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var res = "";
  for(let i=0; i<str.length; i++) {
    for(let j=0; j<az.length; j++) {
      if(str[i] === AZ[j]) {
        res += az[j];
      }
    }
  }
  return res;
}
let array=["MA","SA","I","SCH","OOL"];
for(let i=0; i<array.length; i++) {
  array[i] = lowercase(array[i]);
  // console.log(array);
}
console.log(array);
