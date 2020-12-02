function userSalary() {
    var salary = {
        andy: 3500,
        tom: 2700,
        liza: 3100,
        ban: 2000,
        katy: 2600
    };
    return salary;
}
var zp = userSalary();
function myFunc() {
	var str = zp;
str.andy = 3700;
str.ban = 2700;
return str;
}

var res = myFunc();
console.log(res);