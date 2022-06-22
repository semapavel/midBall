function getMaxSubSum(arr) {
	let max = 0;
	let sum = 0;
	for(let num of arr){
		sum+=num;
		if(sum>max)max=sum;
		if(sum<0) sum=0;
	}
	return max
}

alert( getMaxSubSum([-1, 2, 3, -9]) );
alert( getMaxSubSum([-1, 2, 3, -9, 11]) );
alert( getMaxSubSum([-2, -1, 1, 2]) );
alert( getMaxSubSum([1, 2, 3]) );
alert( getMaxSubSum([100, -9, 2, -3, 5]) );