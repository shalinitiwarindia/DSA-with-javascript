function whoIsGoingForward(arr,k){
    var count = 0;
    for (var i=0;i<arr.length;i++){
      if (arr[i] >= arr[k-1] && arr[i] > 0){
          count++;
      }

    }
    console.log(count);
}
whoIsGoingForward([10,9,8,7,7,7,5,5],5);
