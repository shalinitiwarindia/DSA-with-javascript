//object
var details={
  data:[],
  addStudents:function(name,math,sci,eng){
    var obj={};
      obj.name=name,
      obj.maths=math,
      obj.science=sci,
      obj.english=eng,
        this.data.push(obj);
    }
  }
details.addStudents("shalini",98,90,88);
details.addStudents("rajat",80,70,68);
details.addStudents("raju",90,60,88);

console.log(details.data);
