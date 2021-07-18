class Person{
    name
    constructor(name){
        this.name = name;
    }

    getId(){
        return 10;
    }

    run() {
        console.log('run noww...');        
    }
}
let person1 = new Person('lana');
console.log(`Type of person1: ${typeof person1}`);
console.log(`Type of Person: ${typeof Person}`);
person1.run();
// ***
console.log(`person1's name: ${person1.name}`);
// **
console.log('// --');

class Employee extends Person{
    // constructor(name){
    //     super(name);
    //     console.log(`hello alo ${name}`);
    // }
}
let emp = new Employee('nala');
console.log(`emp's name: ${emp.name}`);
console.log(emp.getId());
;
// constructor
console.log('// --');

class Lap {
    public name: string;
    public doc: string;
    constructor(name: string, doc: string) {
        this.name = name;
        this.doc = doc;
    }
}
class Lap2 {
    constructor(public name: string){

    }
}

let lap = new Lap2('doc');
console.log(lap.name);
// interface
console.log('// --');
interface IPerson {
    readonly name: string
    age?: number
}
let Per1 : IPerson = {
    name: 'lala',
    age: 2
}
let Per2 : IPerson = {
    name: 'lala',
}

// Per2.name = "ss" error
Per2.age = 21