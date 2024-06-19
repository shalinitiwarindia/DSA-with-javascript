function checkPalindrome(str){
    rev_str="";
    for(let i=str.length-1;i>=0;i--){
        rev_str+=str[i];
    }
    if(str==rev_str){
        return true;
    }else{
        return false;
    }
}

function masaiPalSubString(S){
    //write code here
    var N=S.length;
    var max_length=0;
    for(var start=0; start<N; start++){
       for(var end=start;end<N; end++){
             temp=""
            for(var i=start;i<=end;i++){
               temp+=S[i]; 
            }
            if(checkPalindrome(temp)){
                if(temp.length>max_length){
                    max_length=temp.length;
                }
            }
        }
    }
    console.log(max_length);
}
