var a = +prompt ("Введите перовое число!");
var b = +prompt ("Введите второе число!");
calc(a,b);
 function calc(a,b) {
	var res = a ** b;
	alert("Равно :" + res);
	 }