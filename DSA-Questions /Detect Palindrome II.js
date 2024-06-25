function detectPalII(N, string){
    //write code here
   var details={};
   let count=0;
   for(var i=0;i<string.length;i++){
       var char=string[i];
       if(details[char]===undefined){
           details[char]=1;
       }else{
           details[char]+=1;
       }
   }
   for(var keys in details)
       if(details[char]%2!==0){
           count++;
       }if(count>=2){
           console.log("Not Possible!");
       }else{
           console.log("Possible!");
       }
}
