var student = {
  name : "lalu",
  grade : "X",
  section : "A",
  maths : 30,
  science : 40,
  english : 35,
  geography : 50,
  history : 80,
  biology : 20
}

for(var key in student)
{
  console.log(key," : ",student[key]);
}
