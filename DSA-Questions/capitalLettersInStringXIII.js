function capitalLettersInStringXIII(N, str) {
	//write you code here
	let count=0;
	for(let i=0;i<str.length;i++){
	    if(str[i] >= 'A' && str[i] <= 'Z'){
	        count++;
	    }
	}
	console.log(13*count);
}
