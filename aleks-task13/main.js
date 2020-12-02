function createArray() {
let arr = [];
for (let i = 0; i<10; i++) {
	arr[i] = i*i;
}
return arr;
}
var res = createArray();
console.log(res);
