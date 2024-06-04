function characters1DArray(N,str){
	//Enter Code Here
	let a = '*';
	let b = '-';
	let c = '/';
	for(let i=0;i<N;i++){
	    if(str[i]===a){
	        console.log("0");
	    }if(str[i]===b){
	        console.log("1");
	       
	    }if(str[i]===c){
	        console.log("2");
	    }
	}
}
