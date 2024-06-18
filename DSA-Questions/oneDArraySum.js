function oneDArraySum(str,N){
    let sum=0;
    for(let i=0;i<N;i++){
	    if(str[i]=='#'){
	        sum=sum+1;
	    }else if(str[i]=='@'){
	        sum=sum+2;
	   }else{
	        sum=sum+3;
	   }
 }
	console.log(sum);
}
