function aclean(arr) {
	let map=new Map();
	for(let item of arr){
		let sort=item.toLowerCase().split('').sort().join('');
		map.set(sort,item);
	}
	return Array.from(map.values())
	/* ваш код */
 }
 
 let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

 alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"