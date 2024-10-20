function vowelsInRows(N,M,arr){

const vowels = ['a', 'e', 'i', 'o', 'u'];

arr.forEach(row => {
  let hasVowel = row.some(char => vowels.includes(char.toLowerCase()));
  if (hasVowel) {
    console.log("yes");
  } else {
    console.log("no");
  }
});

   
}
