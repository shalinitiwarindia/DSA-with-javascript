 //for in loop in object
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
      console.log(key,"-",obj[key]);
    }
