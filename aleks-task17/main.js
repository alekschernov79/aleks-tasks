var arr = [2, 19, 50, 17, 23, 62, 25, 12, 88, 34, 97, 71, 68, 2, 42, 44];
var num = 50;
var res = 0;
for (var i = 0; i < arr.length; i++){
res += arr[i];
}
str = res / arr.length;
console.log(str);
    for (var i = 0; i < arr.length; i++){
    if (arr[i] >= num){
       arr.splice(i, 1, str);
    }
    else {
    }
}
    console.log(arr);


//var arr = [2, 19, 50, 17, 23, 62, 25, 12, 88, 34, 97, 71, 68, 2, 42, 44];
//var num = 50;
//function meanNumber() {
//var res = 0;
//for (var i = 0; i < arr.length; i++){
//res += arr[i];
//}
//str = res / arr.length;
//return str;
//}
//console.log(meanNumber);
//function replacement(){
//    for (var i = 0; i < arr.length; i++){
//    if (arr[i] >= num){
//       arr.splice(i, 1, meanNumber);
//    }
//    else {
//    }
//    return arr
//    }
//    }
//    console.log(meanNumber);
