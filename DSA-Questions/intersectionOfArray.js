function intersectionOfArray(N, arr1, arr2){
    //write code here
    let result= [];
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]===arr2[j] && !result.includes(arr1[i])){
                result.push(arr1[i]);
                break;
            }
        }
    }
    console.log(result);
}
