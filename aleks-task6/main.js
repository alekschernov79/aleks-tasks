var userName = 'Vasya';
var str = "";
for (var i = 0; i < userName.length; i++) {
	if (i % 1,5) {
		str += userName[i] + ".";
	}
	else {
		str += userName[i];
	}
}
console.log(str);
