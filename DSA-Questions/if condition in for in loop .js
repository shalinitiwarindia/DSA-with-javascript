//if condition in for in loop 
  var obj={
    name : "Ram",
    age : 25,
    hobbies : ["coding","reading"],
    address:{
      city:"Mumbai",
      pincode:400024,
    }
    }
    for(var key in obj){
      if(obj[key]=="Ram"){
        console.log(key,"-",obj[key]);
      }
      
    }
