function prime(num){
  var fact=0;
  for(var i=2;i<num;i++){
    if(num%i==0){
      fact++;
    }
  }
  if(fact==0){
    return true;

  }else {
    return false;
  }
}
for(var i=3;i<=15;i++){
  var a=prime(i);
  if(a==true){
    console.log(i,"Prime");

   }else{
     console.log(i,"No prime")
   }
}
