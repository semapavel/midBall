let salaries = {
	"John": 100,
	"Pete": 300,
	"Mary": 250
 };
 function sumSalaries(salaries){
	let sum=0;
	for(let num of Object.values(salaries)){
		sum+=num;

	}
	return sum;
 }

 alert( sumSalaries(salaries) ); // 650