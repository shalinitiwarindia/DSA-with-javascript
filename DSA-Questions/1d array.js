function charactersOf1DArray(N,str){
   let bag="";
	for(let i=0;i<N;i++){
	    if(str[i]==='*'){
	        bag+=1;
	    }if(str[i]==='#'){
	        bag+=2;
	       
	    }if(str[i]==='/'){
	        bag+=3;
	    }
	} 
	console.log(bag);
}
