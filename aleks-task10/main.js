function whatsIt() {
    var str = 'BoMpWel';
    return str;
}
var str2 = whatsIt();
function render(modelsStr) {
	var res = "";
	for (var char of str2) {
var code = char.charCodeAt();
if (code >= 65 && code <= 90 ) {
res += (code + " ");
}
}
var res2 = "";

return res;
}
 
console.log(render());