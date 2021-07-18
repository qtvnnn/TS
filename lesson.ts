let displayColors = function (message, ...colors: string[]) {
    console.log(message);
    console.log(colors);
    // for(let i in colors){
    //     console.log(colors[i]);
    // }
}
let mes = "hello"
displayColors(mes, 'red');
displayColors(mes, 'red', 'green');
displayColors(mes, 'red', 'green', 'blue');

// **
let colors = ['red 1', 'green 2', 'blue 3'];
displayColors(mes, ...colors);

// **
let employees = ['A', 'B', 'C'];
let [emp1, emp2, emp3] = employees;
let [,,ac] = employees;
let [a,...b] = employees;
console.log(`${emp1} / ${emp2} / ${emp3} / ${ac}`);
console.log(`${a} / ${b}`);
// **

// let emps = {
//     name: 'Tech',
//     post: 'Edu',
//     age: 29
// }
// let {aa, bb, cc} = emps;
// console.log(`${aa} / ${bb} / ${cc}`);
// **

let toto = ['red', 'green', 'yellow', 'pink']
for (const key in toto) {
    console.log(toto[key]);    
}
for (const iterator of toto) {
    console.log(iterator);
}
// ***
let arrStr: string[] = ['hello', 'world'];
let arrNum: number[] = [1,2,3,4];
let arrAny: any[] = ['lala', 22, true];

let arrStr2: Array<string> = ['la', 'na'];

//tuple
let student : [string, number];
student = ['lala', 22];
// student[2] = 'lolo' error
// student[3] = 'lolo' error