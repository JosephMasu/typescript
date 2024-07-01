//with or without the datatype, the typescrit will still recognized the datatype
let myName:string = 'Joe';
myName = "Masu";
myName = myName.toUpperCase();
console.log(myName);
// myName = 23;


let balance:number = 20;
balance = 12-2;
// balance = 'mybalance';

let myGender: boolean = false;
myGender = true;
// myGender = 'Male';

// challenge one
let greeting : string = 'Hello, Ts';
greeting = greeting.toUpperCase();
let age: number = 35.56;
age = age + 2;

let IsAdult: boolean = age >=18;
console.log(IsAdult);