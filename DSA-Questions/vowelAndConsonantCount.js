function vowelAndConsonantCount(N, str) {
  //write code here
  let vowelCount=0;
  let consonant=0;
 
        var x = str;
        for(var k=0;k<x.length;k++){
            if(x[k]=="a" || 
            x[k]=="e" || 
            x[k]=="i" ||
            x[k]=="o" || 
            x[k]=="u"){
                vowelCount++;
            }
            else{
                consonant++;
            }
  }
        console.log(vowelCount);
        console.log(consonant);
}
