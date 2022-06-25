let lis = document.getElementsByTagName('li');

for (let li of lis) {
	let count = li.getElementsByTagName('li').length;
	if (!count) continue;
	li.firstChild.data += ' [' + count + ']';
}