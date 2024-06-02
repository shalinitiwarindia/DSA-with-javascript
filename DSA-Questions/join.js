// Part 1 : Using Bag
var arr = ["M","A","N"];
var bag="";
for(var i=0; i<arr.length; i++)
{
bag = bag + arr[i];
}
console.log(bag);
var bag = arr.join();
console.log(bag);
