function replaceVowels(str, N){
	//Enter Code Here
	var bag="";
	for(let i=0;i<str.length;i++){
	    if(str[i]=="a"||
	    str[i]=="e"||
	    str[i]=="i"||
	    str[i]=="o"||
	    str[i]=="u"){
	       bag+="*"; 
	    }else{
	        bag+=str[i];
	    }
	 }
	console.log(bag);
}
