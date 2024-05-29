function checkVowel(N, str) {
  //write code here
    
        var x = str;
        for(var k=0;k<x.length;k++){
            if(x[k]=="a" || 
            x[k]=="e" || 
            x[k]=="i" ||
            x[k]=="o" || 
            x[k]=="u"){
              console.log("true");
            }
            
               
            else{
                console.log("False");
            }
               
        }  
}
