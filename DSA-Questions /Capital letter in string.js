function capitalLetterInString(N, str){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]>='A' && str[i] <='Z'){
            count++;
        }
    }
    console.log(5*count);
}
