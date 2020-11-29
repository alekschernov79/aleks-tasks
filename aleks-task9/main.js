function arrNumber() {
        var arr = ['234', '176', '502', '306', '412'];
        return arr;
    }
    var str = arrNumber();
//    function newStr(str) {
//    	var res = "";
//        for (var i = 0; i < 5; i++) {
//    if (i % 1) {
//    		res += str[i] + " ";
//    	}
//    	else {
//    		res += str[i];
//    	}
//    }
//    return res;
//    }
//       var str2 = newStr(str);
var str2 = str.join('');
    function newStr2(str2) {
    	var res2 = "";
        for (var i = 0; i < 15; i++) {
        
    if (str2[i] % 2 == 0) {
    		res2 += str2[i] + " ";
    	}
    	else  {
    		res2 += str2[i];
    	}
    }
    return res2;
    }
    var str3 = newStr2(str2);
    var str4 = str3.split(' ');
    var str5 = str4.slice(0,-1); 
    alert(str5);


    function whatsIt() {
        var str = 'BoMpWel';
        return str;
    }
    var str2 = whatsIt();
    function render(modelsStr) {
        var userTable = document.getElementById("user-list");
        var res = "";
        var res2 = "";
        var res3 = ['res', 'res2'];
        for (var char of str2) {
    var code = char.charCodeAt();
    if (code >= 65 && code <= 90 ) {
    res += char;
    }
    else {
        res2 += char;
    }
    }
    //return res3 = [res, res2];
    var res4 = "";
    for (var k in res3) {
        res4 += `<li>${res3[k]}</li>`;
    }
    console.log(res4);
    userTable.innerHTML = res4;
    }
     
    console.log(render());