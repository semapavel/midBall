let list = {
	value: 1,
	next: {
	  value: 2,
	  next: {
		 value: 3,
		 next: {
			value: 4,
			next: null
		 }
	  }
	}
 };

function printReverseList(list){
	let arr=[];
	let obj=list;
 
	while (obj){
		arr.push(obj.value);
		obj=obj.next;
	}
	for(let i=arr.length-1;i>=0;i--){
		alert(arr[i]);
	}
}

// function printReverseList(list){
// 	if(list.next){
// 		printReverseList(list.next);
// 	}
// 	alert(list.value);
// }

printReverseList(list);