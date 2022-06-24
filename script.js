// function printNumbers(from, to){
// 	let i=from;
// 	setTimeout(function repeat(){
// 		alert(i);
// 		if(i<to){
// 			setTimeout(repeat,1000)
// 		}
// 		i++;
// 	},1000)
// }

function printNumbers(from, to){
	let i=from;
	let timerId=setInterval(function (){
		alert(i);
		if(i==to){
			clearInterval(timerId)
		}
		i++;
	},1000)
}
printNumbers(4, 6)