function lastIndex(animal,search){
  var result =-1;
  for(let i=0; i<=animal.length; i++){
    if(animal[i]==search){
      result=i;
    }
  }
    return result;
}
var animal = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
console.log(lastIndex(animal,"Dodo"));
