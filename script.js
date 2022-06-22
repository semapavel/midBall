function filterRangeInPlace(arr, a, b){
	for(i=0;i<arr.length;i++){
		if (arr[i]<a||arr[i]>b){
			arr.splice(i,1);
			i--;
		}
	}
	return arr
}

let arr = [5, 3, 8, 1];

console.log(filterRangeInPlace(arr, 1, 4));