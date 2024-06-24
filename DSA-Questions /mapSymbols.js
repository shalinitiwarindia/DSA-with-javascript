function mapSymbols(N) {
    // Write code here
    var symbol="!@#$%^&*";
    var obj={};
    for(let i=0;i<symbol.length;i++){
        var char=symbol[i];
        obj[char]=N;
        N=N+2;
        
    }
    console.log(obj);
}
   
