function alanFrequency(N, string) {
  var details={};
     for(var i=0;i<string.length;i++){
       var char=string[i];
       if(details[char]===undefined){
           details[char]=1;
       }else{
           details[char]+=1;
       }
   }
   console.log(details);
  }
