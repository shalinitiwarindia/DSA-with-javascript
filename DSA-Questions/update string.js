var name = "Mahesh";
var name2 = []

for(var i=0; i<name.length; i++)
{
  name2.push(name[i]);
}

name2[0] = "R";
var bag = "";
for(var i=0; i<name2.length; i++)
{
  bag = bag + name2[i];
}
console.log(bag);
