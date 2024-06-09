function stringValue(S) {
  //write code here
    var N=S.length;
    var index_string="abcdefghijklmnopqrstuvwxyz";
    var value_obj={};
    for(var i=0;i<26;i++){
       value_obj[index_string[i]]=i+1; 
    }
    var sum=0;
    for(var j=0;j<N;j++){
        sum+=value_obj[S[j]];
    }
    console.log(sum);
}
