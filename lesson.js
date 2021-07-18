var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var displayColors = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    console.log(colors);
    // for(let i in colors){
    //     console.log(colors[i]);
    // }
};
var mes = "hello";
displayColors(mes, 'red');
displayColors(mes, 'red', 'green');
displayColors(mes, 'red', 'green', 'blue');
// **
var colors = ['red 1', 'green 2', 'blue 3'];
displayColors.apply(void 0, __spreadArray([mes], colors));
// **
var employees = ['A', 'B', 'C'];
var emp1 = employees[0], emp2 = employees[1], emp3 = employees[2];
var ac = employees[2];
var a = employees[0], b = employees.slice(1);
console.log(emp1 + " / " + emp2 + " / " + emp3 + " / " + ac);
console.log(a + " / " + b);
// **
// let emps = {
//     name: 'Tech',
//     post: 'Edu',
//     age: 29
// }
// let {aa, bb, cc} = emps;
// console.log(`${aa} / ${bb} / ${cc}`);
// **
var toto = ['red', 'green', 'yellow', 'pink'];
for (var key in toto) {
    console.log(toto[key]);
}
for (var _i = 0, toto_1 = toto; _i < toto_1.length; _i++) {
    var iterator = toto_1[_i];
    console.log(iterator);
}
// ***
var arrStr = ['hello', 'world'];
var arrNum = [1, 2, 3, 4];
var arrAny = ['lala', 22, true];
var arrStr2 = ['la', 'na'];
//tuple
var student;
student = ['lala', 22];
