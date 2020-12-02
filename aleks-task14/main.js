function arrLink() {
    var link = [':', '/', '/', 'www', '.', 'google', '.'];
    return link;
}
str = arrLink();
console.log(str);

function myFunc() {
	var str2 = str
str2.splice(0,0,"http");
str2.push("com");
str3=str2.join("");
   return str3;
}
str4 = myFunc();
console.log(str4);
var userTable = document.getElementById("user-list")
userTable.innerHTML = `<a href= ${str4}>Google</a>`;
