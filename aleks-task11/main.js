var str = 'Hello world';

function countUnicode(dataStr) {
        var unikod = +"";
        for (var char of str){
    	console.log(char.charCodeAt());
    	unikod += char.charCodeAt();
    	    }
    return unikod;
}

var res = countUnicode(str);

alert(res);