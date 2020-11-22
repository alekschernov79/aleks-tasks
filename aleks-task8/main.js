// Вариант без второй функции
//function arrString() {
//    var str = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
//    return(str);
//}
//var str = arrString();

//var res = '';
//for (var item of str) {
//	res = `${res} ${item}`; //Вариант 1
//res += item + ' '//Вариант 2
//}
//res = `${res}`;
//console.log(res);
//alert (res);

function arrString() {
    var str = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
    return(str);
}
var str = arrString();

function newStr(str) {
    var res = ' ';
    for (var item of str) {
        res += `${item} ` ;
    }
    return res;
}

alert (newStr(str));