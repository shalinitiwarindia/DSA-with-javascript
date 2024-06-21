function dayOfTheWeek(day, N) {
  //write code here
  var d=["Monday","Tuesday","Wednesday",
  "Thursday","Friday","Saturday","Sunday"];
  for(let i=0;i<7;i++){
      if(d[i]==day){
         var new_day=d[(i+N)%7]
      }
  }
  console.log(new_day);
}
