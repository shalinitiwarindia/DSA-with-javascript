for(var mon=1;mon<=12;mon++){
  var days=31;

  if(mon==2){
    var days=28;
  }
  else if(mon==4 || mon==6 || mon==9 || mon==11){
    var days=30;
  }
  for(var day=1;day<=days;day++){
    console.log(mon+"-"+day);
  }
}
