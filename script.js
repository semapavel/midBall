
function getSecondsToTomorrow(){
	let date=new Date();
	let tomor=new Date(date.getFullYear(),date.getMonth(),date.getDate())
	return (date-tomor)/1000
}

alert(getSecondsToTomorrow());