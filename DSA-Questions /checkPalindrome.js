function checkPalindrome(N, str) {
    //write code here
    let rev="";
    for(let i=str.length-1;i>=0;i--){
        rev+=str[i];
  }
  if(str===rev){
      console.log("Yes");
  }else{
      console.log("No");
  }
}

