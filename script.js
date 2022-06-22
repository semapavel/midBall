 let schedule = {};
// alert( isEmpty(schedule) );
schedule["8:30"] = "get up";
alert( isEmpty(schedule) );

function isEmpty(obj) {
	for (let key of obj) {
		return false;
	}
	return true;
}
