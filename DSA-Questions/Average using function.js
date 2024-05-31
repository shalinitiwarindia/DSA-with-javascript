function average(n, arr) {
  var sum = 0;
  for(let i=0; i<n; i++) {
    sum += arr[i];
  }
  return sum/n
}


let arr = [1, 2, 3, 4, 5];
let n = 5;
let avg = average(n, arr);
console.log(avg);
 //console.log(average(n, arr));
