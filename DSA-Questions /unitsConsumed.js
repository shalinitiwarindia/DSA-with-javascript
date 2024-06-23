function unitsConsumed(n) {
    //write code here
    
    if(n<=230){
        console.log((n-80)/3);
    }else if(n<=650){
        console.log(50+(n-230)/5);
    }else{
        console.log(150+(n-730)/10);
    }
}
