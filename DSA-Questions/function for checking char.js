// Write a function to check if the char is a small case or not

function is_small_case(char){
  var lower = "abcdefghijklmnopqrstuvwxyz";

  for(var i=0; i<lower.length; i++){
    if(char == lower[i]){
      return true
    }
  }

  return false;
}

console.log(is_small_case('S'));
