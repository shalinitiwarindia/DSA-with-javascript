function yourFirstNested(num) {
    // Write code here
    
    for(let i=1; i<=num; i++)
    {
        let str="";
       for(let j=1; j<=num; j++){
        
         str = str +j + " " ;
    }
    
       console.log(str); 
     }
}
