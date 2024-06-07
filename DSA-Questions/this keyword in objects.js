//calling the function using this keyword 
var details={
  name:"krishna",
  age:24,
  print:function(){
    console.log("My name is",this.name,"My age is",this.age);
  }
}
  details.print();
