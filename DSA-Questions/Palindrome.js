//for palindrome
var name="naman";
rev_str="";
for(var i=name.length-1;i>=0;i--){
  rev_str=rev_str+name[i];
  }
if(name==rev_str){
  console.log("Yes");
  }else{
  console.log("No");
  }

//not palindrome
var name="racer";
rev_str="";
for(var i=name.length-1;i>=0;i--){
  rev_str=rev_str+name[i];
  }
if(name==rev_str){
  console.log("Yes");
  }else{
  console.log("No");
  }
