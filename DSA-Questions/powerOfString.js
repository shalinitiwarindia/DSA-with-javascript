function powerOfString(N, str){
	let countVowel=0;
	let countConst=0;
	for(let i=0;i<N;i++){
	    if(str[i]=='a'||
	    str[i]=='e'||
	    str[i]=='i'||
	    str[i]=='o'||
	    str[i]=='u'){
	        countVowel++;
	    }else{
	       countConst++;
	    }
	 }
    console.log(7*countVowel+2*countConst);
}
