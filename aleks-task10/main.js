function whatsIt() {
    var str = 'BoMpWel';
    return str;
}

var str2 = whatsIt();

function render(modelsStr) {
    var res = ""; // авто 1
    var res2 = ''; // авто 2
		for (var char of str2) {
        var code = char.charCodeAt(); // поолучаешь код Юникода

        if (code >= 65 && code <= 90 ) { // сравниваешь код буквы у условии
            res += char; // не code а char(буквы), потому как ты же собираешь не код Юникода в слово, а слово из букв
        } else { // если буква имеет код Юникода не попадающий в диапазон от 65 до 90, то выполнится условие else
            res2 +=char; // собираешь второе название авто
        }
    }
    // сталось вернуть не просто res, как в строке ниже, а обвернуть результаты в элементы списка и добавить в заранее созданный блок списка
    
 var res3 = [res, res2];
 var userTable = document.getElementById("user-list");
 var str3 = "";
 for (var a in res3) {
 	str3 += `<li>${res3[a]}</li>`;
 }
  userTable.innerHTML = str3;

 return str3;
 }

console.log(render());
