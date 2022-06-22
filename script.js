function sumInput(){
	let array=[];
	do {
		num=+prompt('Введите число:','')
		if(!isFinite(num)||num==''||num==null){
			break
		} else {
			array.push(num)
		}
	} while (true)
	let sum=0;
	for(let arr of array){
		sum+=arr
	}
	return sum
}
alert(sumInput());