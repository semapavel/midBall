
function getSecondsToTomorrow(){
	let date=new Date();
	let tomor=new Date(date.getFullYear(),date.getMonth(),date.getDate()+1)
	return (tomor-date)/1000
}

alert(getSecondsToTomorrow());