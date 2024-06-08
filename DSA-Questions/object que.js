var name = "shubham";

var details = {};

for(var i=0; i<name.length; i++)
{
 var char = name[i];


 if(details[char] == undefined)
 {
   details[char] = 1;
 }
 else
 {
   var prev = details[char];
   details[char] = prev+1;
 }

}

console.log(details);
