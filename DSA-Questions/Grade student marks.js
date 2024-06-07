function highestScore(obj) {
    var res = getHighesMarksStudent(obj.students);
    return `${obj.grade}-${res}`;
}

function getHighesMarksStudent(student) {
    var max = 0;
    var name = "";
    for(let i=0; i<student.length; i++) {
        if(totalMarks(student[i].marks)>max) {
            max = totalMarks(student[i].marks);
            name = student[i].name;
        }
    }
    return `${name}-${max}`
}

function totalMarks(arr) {
    var sum = 0;
    for(let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}


var mainObject =
  [
	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
		]
	}
]

for(let i=0; i<mainObject.length; i++)  {
    console.log(highestScore(mainObject[i]));
}
