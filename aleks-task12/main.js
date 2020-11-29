function arrError() {
        var arr = ['John!', 'what!', 'are!', 'you!', 'doing!?'];
            return arr;
    }
    var str = arrError();
    function arrGood() {
    	var str2 = str.join();
    	var str3 = "";
    	for(var item of str2) {
    	if (item == "!") {
    		str3 !== item;
    	}	
    	else {
    		str3 += item;
    	}
    	}
    	var str4 = str3.split(",");
    	return str4;
    }
    console.log(arrGood());
    