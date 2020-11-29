function arrNumber() {
        var arr = ['234', '176', '502', '306', '412'];
        return arr;
    }
    var str = arrNumber();
    function newStr(str) {
    	var res = "";
        for (var i = 0; i < 5; i++) {
        
    if (i % 1) {
    		res += str[i] + " ";
    	}
    	else {
    		res += str[i];
    	}
    }
    return res;
    }
       var str2 = newStr(str);
    function newStr2(str2) {
    	var res2 = "";
        for (var i = 0; i < 15; i++) {
        
    if (i % 2 == 0) {
    		res2 += str2[i] + " ";
    	}
    	else if (i % 2 == 1) {
    		res2 += str2[i];
    	}
    }
    return res2;
    }
    var str3 = newStr2(str2);
var str4 = str3.split(' ') 
    alert(str4);