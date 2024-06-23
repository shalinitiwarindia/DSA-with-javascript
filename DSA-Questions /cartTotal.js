function cartTotal(N, price, quantity) {
   var sum=0;
   for(var i=0;i<quantity.length;i++){
       sum=sum+(quantity[i]*price[i]);
   }
   console.log(sum);
}
