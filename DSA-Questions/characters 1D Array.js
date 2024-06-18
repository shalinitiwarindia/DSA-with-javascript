function characters1DArray(N,str){
	//oj solution(platform)
	let bag="";
	for(let i=0;i<N;i++){
	    if(str[i]=='*'){
	        bag+=0;
	    }else if(str[i]=='-'){
	        bag+=1;
	   }else{
	        bag+=2;
	   }
	}
	console.log(bag);
}
