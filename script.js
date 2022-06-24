function fib(n){
	let num1=1;
	let num2=1;
	for(let i=3;i<=n;i++){
		let sum=num1+num2;
		num1=num2;
		num2=sum;
	}
	return num2;
 }

alert( fib(3) ); // 2
alert( fib(7) ); // 13
alert( fib(77) ); // 5527939700884757