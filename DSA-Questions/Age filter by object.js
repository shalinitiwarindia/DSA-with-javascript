const obj = {
"Nrupul":32,
  "Prateek" :30,
  "Aman" :26,
  "Albert" :28,
  "Yogesh" :44,
}
var res=[];
for(var person in obj){
  if(obj[person]>30)
    res.push(person);
}
console.log(res)
