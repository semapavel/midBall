function topSalary(salaries){
	let maxName=null;
	let maxSalary=0;
	for(let [name,salary] of Object.entries(salaries)){
		if (maxSalary<salary){
			maxSalary=salary;
			maxName=name;
		}
	}
	return maxName;
}
let salaries = {
	"John": 300,
	"Pete": 300,
	"Mary": 250
 };
 console.log(topSalary(salaries));