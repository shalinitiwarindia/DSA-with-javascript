//area and perimeter of rectangle
var rectangle={
  length:700,
  breath:500,
area:function(){
  console.log("area",this.length*this.breath);
},
perimeter:function(){
  console.log("perimeter",2*(this.length+this.breath));
  }
};

rectangle.area();
rectangle.perimeter();
