let x=prompt('Введите число x','');
let n=prompt('Введите число n','');
if (n<1){
	alert('Введите натуральное число n')
} else {
	alert(pow(x,n));
}

function pow(x,n){
	let sum=x;
	for(let i=1;i<=n;i++){
		sum*=x;
	}
	return sum;
}
