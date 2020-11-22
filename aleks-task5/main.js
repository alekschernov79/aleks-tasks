var names = ['Alex', 'Sergei', 'Olga', 'Denis'];
var userTable = document.getElementById("user-list");
var str = "";
for (var k in names) {
	str += `<li>${names[k]}</li>`;
}
console.log(str);
userTable.innerHTML = str;