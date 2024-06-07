//print all the products whose rating is greater than equal to 3
var products =[
  {name:"sony",price:25000,rating:4},
  {name:"realme",price:23000,rating:5},
  {name:"nokia",price:2000,rating:3},
  {name:"sony",price:25000,rating:4},
  {name:"sumsang",price:27000,rating:2}
];
for(let i=0;i<products.length;i++){
  if(products[i].rating>=3){
    console.log(products[i].name,products[i].price);
  }
}
