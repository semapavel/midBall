function readNumber(){
	let a;
	do {
		 a=prompt('Введите число a:','');
	} while(!isFinite(a));
	if(a==''||a==null){
		return null
	}
return +a
}

alert(readNumber());


 
