let n=4;
let bag=0;
for(let i=1;i<=n;i++){
  let str="";
  
  for(let j=bag;j<=n;j++){
    str=str+j+" ";
   
  }
  bag++;
  console.log(str);
}
