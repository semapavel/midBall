function unique(arr){
	array=[];
	for (let item of arr){
		if(!array.includes(item)){
			array.push(item)
		}
	}
return array;
}
 
 let strings = ["кришна", "кришна", "харе", "харе",
	"харе", "харе", "кришна", "кришна", ":-O"
 ];
 
 alert( unique(strings) ); // кришна, харе, :-O