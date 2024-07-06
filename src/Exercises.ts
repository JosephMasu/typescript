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

// union type
let tax: number | string =10;
tax = 100;
tax = '$10';
console.log(tax + tax);
 
let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'error';
console.log(requestStatus);

//array
const books = ['Java', 'Barave New World', 'Celcuis 452'];
let foundBook: string | undefined;
for (let book of books) {
    if(book ==='Java'){
        foundBook = book;
        foundBook = foundBook.toUpperCase();
        break;
    }
}
console.log(foundBook?.length);

//challenge
let  orderStatus:'processing' | 'shipped' | 'delivered' = 'processing';
orderStatus = 'shipped';
orderStatus = 'delivered';

let discount: number | string;
discount = 20;
discount = '20%';

// still array\
let prices:number[] = [100, 60,75];
// prices.push('hello');


//challenge
let temperature : number[] = [20,25,30];
let colors : string [] = ['blue', 'red', 'chacolate', 'marron'];
let mixed : (number | string)[] = [1, 'two', 3];


//object
let car: { brand: string; year:number } = {brand: 'toyata', year: 2020};
car.brand = 'ford';
console.log(car);

let book = {title: 'book', cost: 30}
let pen = {title: 'pen', cost: 10}
let notebook = {title: 'boonotebookk'}
let items:{readonly title: string; cost?:number}[] = [book, pen, notebook]
console.log(items[0]);


//challlenge
let bike: { brand: string; year:number } = {brand: 'yamaha', year: 2010};
bike.brand='TVS';
console.log(bike.brand);

let laptps: { brand: string; year:number } = {brand: 'toshiba', year: 2017};

let product1 = {title: 'shirt', price: 20};
let product2 = {title: 'pants'};
let products: { title: string; price?: number }[] = [product1, product2];
products.push({ title: 'Shoes', price: 20 }); // This will result in a TypeScript error
console.log(products);

function sayHi(name:string ){ 
   console.log(`Hello there ${name.toUpperCase()}`);
   
}
sayHi('muhindo');


function calculateDiscount(price:number){
    const hasDscount =true;
console.log(`Discount Available? ${hasDscount}`);

    return price * 0.89;
    if (hasDscount) return 'Discout Applied';
    
}
const finalPrice =calculateDiscount(21);
console.log(`Prodcut is ${finalPrice}`);


function addThree(number: any){
    let anotherNumber: number = 4;
    return number+ anotherNumber;
}

const result = addThree(3);
const somevalue = result;
console.log(somevalue);

//challenge

let names:string[] = ['Joe', 'Gaga', 'Zig'];

function isNameInList(name:string):boolean{
    return names.includes(name);
}

let nameToChek = 'Allan';
if (isNameInList(nameToChek)) {
  console.log(`${nameToChek} is in the list`);
    
}else{
    console.log(`${nameToChek} isn't in the list`);

}

//optional and defaul parameters in function
function calculatePrice(price: number, discount?: number):number{
    return price - (discount || 0);
}
let priceAfterDiscount = calculatePrice(200,20);
let priceWithoutDiscount = calculatePrice(200);

console.log(`${priceAfterDiscount} is the final price`);
console.log(`${priceWithoutDiscount } is the price without discount`);


function calculatePoints(initialScore: number, penaltyPoints:number=0):number{
    return initialScore + penaltyPoints;
}
let pointsAfterPanalties = calculatePoints(200,20);
let pointsWithoutPanalties = calculatePoints(200);
console.log(` the points after penalties are ${pointsAfterPanalties}`);
console.log(` the points without penalties are ${pointsWithoutPanalties}`);

//rest parameters in TS
function sum(message: string, ...numbers:number[]){
    const doubled = numbers.map((num) =>num *2);
    console.log(doubled);

    let total = numbers.reduce((previous, current) =>{
        return previous+current;
    }, 0);
    return `${message} ${total}`;
    
}

let result3 = sum('The total is :', 1,2,3,4,5,6,7,8,9,10);
console.log(result3);

//callback function

function logMessage(message: string):void{
    console.log(message);
}
logMessage('Hell TS');

//unoin types as function parameters

function processInput (input: string | number){
if (typeof input === 'number') {
    console.log(input *3);
    
}else{
    console.log(input.toLocaleUpperCase());
    
}
}
processInput(10);
processInput("typescript");

//object as parameter in function

function createEmployee({ id }: { id: number }): {
    id: number;
    isActive: boolean;
  } {
    return { id, isActive: id % 2 === 0 };
  }

  const one = createEmployee({id:18});
  const two = createEmployee({id:19});
  console.log(one, two);

  //challenge
  function processData(
    input: string | number, 
    config: { reverse: boolean } = {reverse: false}): string | number{
        if (typeof input === 'number') {
            return input * input;
        }
          else{
            return config.reverse ? 
            input.toUpperCase().split('').reverse().join()
            : input.toUpperCase();
        }
    }
    console.log(processData(10));
    console.log(processData('Hello'));
    console.log(processData('hello', {reverse: true}));
   
    //Type Alias
    type User = { id: number; name: string; isActive: boolean }
    const john:User = {
        id: 1,
        name: 'john',
        isActive: true,
    };
    const susan: User = {
        id: 1,
        name: 'susan',
        isActive: false,
    };
      
      function createUser(user: User): User{

     
        console.log(`Hello there ${user.name.toUpperCase()} !!!`);
      
        return user;
      }
    const createdJohn = createUser(john);
    console.log(createdJohn);

    const createdSusan = createUser(susan);
    console.log(createdSusan);

    let value: string | number;
    value='hello';
    console.log(value);
    value=123;
    console.log(value);

    type Theme = 'Light' | 'Dark';
    let theme: Theme;
    theme ='Dark';
    console.log(theme);
    
    theme = 'Light';
    console.log(theme);


    function setTheme(t:Theme){
        theme =t;
    }
    setTheme('Dark');  
    setTheme('Light'); 


    //challenge
     
    type Employee = { id: number; name: string; department: string };
    type Manager = { id: number; name: string; employees: Employee[] };
    type Staff = Employee | Manager;

    function printStaffDetails(staff: Staff):void{

        if ('employees' in staff) {
            console.log(`${staff.name} 
                is a manger in the ${staff.employees.length} employees`);
        }
        else{
            console.log(`${staff.name} 
                is an employee in the ${staff.department} department`);
            
        }
    }

    const Alicia:Employee = {
        id: 1,
        name: 'Alicia',
        department: "Sales",
    };
    const Gaga:Employee = {
        id: 2,
        name: 'Gaga',
        department: "IT",
    };
    const Anna:Employee = {
        id: 3,
        name: 'Anna',
        department: "Marketing",
    };
  
    const Zig:Manager = {
        id: 1,
        name: 'Gaga',
        employees: [Alicia, Gaga, Anna],
    };

    printStaffDetails(Alicia);
    printStaffDetails(Gaga);
    printStaffDetails(Anna);
    printStaffDetails(Zig);

    //intersection types in union
    type Livres = { id: number; name: string; price: number };
    //Or DiscountedBook = Book & { discount:number}
    const livre1:Livres = {
        id: 1,
        name: 'Learn java',
        price: 23,
    };
    const livre2:Livres = {
        id: 2,
        name: 'Learn typeScript',
        price: 30,
    };
    //Or const DiscountedLivre:DiscountedBook={}
    const DiscountedLivre:Livres &{discount:number} = {
        id: 3,
        name: 'Learn JavaScript',
        price: 41,
        discount: 0.50,
    };
    let realPrice = DiscountedLivre.price - DiscountedLivre.discount;
    console.log(livre1.price);
    console.log(livre2.price);
    console.log(realPrice);

    //Interface

    interface Book11 {
        readonly isbn: number;
        price: number;
        title: string;
        author: string;
        genre?: string;
        printAuthor():void;
        printTitle(message:string): string;
        printSomeThing: (someValue: number)=>number;
        printSomething2: (someValue2 :number)=>number;
        printSomething3: (someValue3 :number)=>number;
        

    }
      
    const deepWork: Book11 = {
        isbn: 9781455586691,
        price: 32,
        title: 'Deep Work',
        author: 'Cal Newport',
        genre: 'Self-help',
        printAuthor() {
          console.log(this.genre);
        },
        printTitle(message){
            return `${this.title} ${message}`
        },
        //options to set a method
        //firstOption
        printSomeThing: function(someValue){
            return someValue;
        },
        //second 

        printSomething2: (someValue2)=>{
            return someValue2;
        },
        //third option 
        printSomething3(someValue3) {
            return someValue3;
        },

       
      };
      const JulietAndRomeo: Book11 = {
        isbn: 558687066691,
        price: 22,
        title: 'JulietAndRomeo',
        author: 'William Shakespeare',
        genre: 'Romance',
        printAuthor(){
            console.log(this.genre);
            
        },
        printTitle(message){
            return `${this.title} ${message}`
        },
        //options to set a method
        //firstOption
        printSomeThing: function(someValue){
            return someValue;
        },
        //secondOption
        printSomething2: (someValue2)=>{
            return someValue2;
        },
        //ThirdOption
        printSomething3(someValue3) {
            return someValue3;
        },

      };

      const AlgorithAndCoding: Book11 &{discount:number}= {
        isbn: 7068753897436691,
        price: 42,
        title: 'Algorithm And Coding',
        author: 'Masu Muhindo',
        genre: 'One step to coding',
        discount: 3,
        printAuthor(){
            console.log(AlgorithAndCoding.genre);  
        }, 
        printTitle(message){
            return `${this.title} ${message}`
        },
        //options to set a method
        //firstOption
        printSomeThing: function(someValue){
            return someValue;
        },
        //secondOption
        printSomething2: (someValue2)=>{
            return someValue2;
        },
        printSomething3(someValue3) {
            return someValue3;
        },

      };
      deepWork.printAuthor();
      JulietAndRomeo.printAuthor();
      AlgorithAndCoding.printAuthor();

      const result11 =deepWork.printTitle('Message11');
      console.log(result11);
      const result12 =JulietAndRomeo.printTitle('Message12');
      const result13 =AlgorithAndCoding.printTitle('Message13');

      
      console.log(result12);
      console.log(result13);

      console.log(deepWork.printSomeThing(12));
      console.log(JulietAndRomeo.printSomeThing(23));
      console.log(AlgorithAndCoding.printSomeThing(34));

      console.log(deepWork.printSomething2(21));
      console.log(JulietAndRomeo.printSomething2(32));
      console.log(AlgorithAndCoding.printSomething2(43));

      console.log(deepWork.printSomething2(211));
      console.log(JulietAndRomeo.printSomething2(322));
      console.log(AlgorithAndCoding.printSomething2(433));
      
      // interface Challenge
      interface Computer {
        readonly id: number; // cannot be changed once initialized
        brand: string;
        ram: number;
        upgradeRam(increase: number): number;
        storage?: number; // optional property
      }
      const laptop: Computer = {
        id: 1,
        brand: 'random brand',
        ram: 8, // in GB
        upgradeRam(amount: number) {
          this.ram += amount;
          return this.ram;
        },
      };
      laptop.storage = 256; 

        console.log(laptop.upgradeRam(8)); 
        console.log(laptop);
    
      //  Interface - Merging, Extend, TypeGuard
      interface Person {
        name: string;
        getDetails(): string;
      }
            
      interface DogOwner {
        dogName: string;
        getDogDetails(): string;
      }
      interface Person {
        age: number;
        
      }

      const person: Person = {
        name: 'joe',
        age: 25,
        getDetails(){
            return `Name: ${this.name}, Age: ${this.age}`;
        },
      };

      interface Employee23 extends Person{
        employeeId: number,
      }
      const employee:Employee23 = {
        name: 'gaga',
        age: 23,
        employeeId: 212121,
        getDetails(){
            return `Name: ${this.name}, Age: ${this.age}, Id: ${this.employeeId}`;
        },
      };

      interface Manager01 extends Person, DogOwner{
        managePeople(): void
      }

      const manger: Manager01= {
        name: 'Bob',
        age: 35,
        dogName: 'Roman',
        getDetails(){
            return `Name: ${this.name}, Age: ${this.age}`;
        },
        getDogDetails(){
            return `Name: ${this.dogName}`;
        },
        managePeople(){
            console.log('managing people ...');
            
        },
      };


      console.log(person.getDetails());
      console.log(employee.getDetails());
      console.log(`${manger.getDetails()} ${manger.getDogDetails()}`);
      manger.managePeople();

      //challenge
      interface Person {
        name: string;
      }
      
      interface DogOwner extends Person {
        dogName: string;
      }
      
      interface Manager30 extends Person {
        managePeople(): void;
        delegateTasks(): void;
      }
      
      const employee30: Person | DogOwner | Manager30 = getEmployee11();

      function isManager(obj: Person | DogOwner | Manager30): obj is Manager30 {
        return 'managePeople' in obj && 'delegateTasks' in obj;
      }
      if (isManager(employee30)) {
        employee30.delegateTasks();
      }
      
      function getEmployee11(): Person | DogOwner | Manager30 {
        const random = Math.random();
      
        if (random < 0.33) {
          return {
            name: 'john',
          } as Person;
        } else if (random < 0.66) {
          return {
            name: 'sarah',
            dogName: 'Rex',
          } as DogOwner;
        } else {
          return {
            name: 'bob',
            managePeople: () => console.log('Managing people...'),
            delegateTasks: () => console.log('Delegating tasks...'),
          } as Manager30;
        }
      }
      //tuples
      let personDetails: [string, number] = ['John', 25];

      let date: readonly [number, number, number] = [12,17,2002];

      function getPersonDetails():[string, number]{
        return ['John', 20]
      }
      let randomPerson = getPersonDetails();
      console.log(randomPerson[0]);
      console.log(randomPerson[1]);

      // enums

      enum ServerResponseStatus{
        success =200,
        error = 500,
      }
      Object.values(ServerResponseStatus).forEach((value) => {
        if (typeof value === 'number') {
            console.log(value);
        }
        
      });      
      interface ServerResponse{
        result: ServerResponseStatus;
        data: string[];
      }

      function getServerResponse():ServerResponse{
        return{
            result:ServerResponseStatus.success,
            data: ['first item', 'second item']
        }
      }
      console.log(getServerResponse());
      console.log(ServerResponseStatus);

      //enum challenge
      enum UserRole {
        Admin,
        Manager,
        Employee,
      }
      
      // Define a type alias named User
      type User1 = {
        id: number;
        name: string;
        role: UserRole;
        contact: [string, string]; // Tuple: [email, phone]
      };
      
      // Define a function named createUser
      function createUser12(user: User1): User1 {
        return user;
      }
      
      // Call the createUser function
      const user32: User1 = createUser12({
        id: 1,
        name: 'John Doe',
        role: UserRole.Admin,
        contact: ['john.doe@example.com', '123-456-7890'],
      });
      
      console.log(user32);

      let someValue: any = 'This is a string';

    // Using type assertion to treat 'someValue' as a string
    let strLength: number = (someValue as string).length;
    console.log(strLength);

    type Bird ={
        name: string;
    };
    let birdString = '{"name": "Eagle"}';
    let dogString = '{"breed": "Roman"}';

    let birdObject = JSON.parse(birdString);
    let dogObject = JSON.parse(dogString);
    

    let bird = birdObject as Bird;
    let dog = dogObject as Bird;

    console.log(bird.name);
    console.log(dog.name);
    
    //type unkown
    let unknownValue: unknown;
    unknownValue = 'Hello World'; 
    unknownValue = [1, 2, 3]; 
    unknownValue = 42.3344556;
// Now, let's try to use unknownValue
if (typeof unknownValue === 'number') {
    // TypeScript knows that unknownValue is a string in this block
    console.log(unknownValue.toFixed(2)); // OK
  }
  
  function runSomeCode() {
    const random = Math.random();
    if (random < 0.5) {
      throw new Error('Something went wrong');
    } else {
      throw 'some error';
    }
  }
  
  try {
    runSomeCode();
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log(error);
      console.log('there was an error....');
    }
  }    
  //Type - "never"

  type Theme1 = 'light' | 'dark';

  function checkTheme(theme: Theme1): void {
    if (theme === 'light') {
      console.log('light theme');
      return;
    }
    if (theme === 'dark') {
      console.log('dark theme');
      return;
    }
    theme;
    // theme is of type never, because it can never have a value that is not 'light' or 'dark'.
  }
  checkTheme('dark');
  checkTheme('light')

  enum Color {
    Red,
    Blue,
    Green,
  }
  function getColorName(color: Color) {
    switch (color) {
      case Color.Red:
        return 'Red';
      case Color.Blue:
        return 'Blue';
        case Color.Green:
        return 'Green';
      default:
        // at build time
        let unexpectedColor1: never = color;
        // at runtime
        throw new Error(`Unexpected color value: ${unexpectedColor1}`);
     }
  }
console.log(getColorName(Color.Red)); // Red
console.log(getColorName(Color.Blue)); // Blue
console.log(getColorName(Color.Green)); // Green


type ValueType = string | number | boolean;

let value1: ValueType;
const random = Math.random();
value1 = random < 0.33 ? 'Hello' : random < 0.66 ? 123.456 : true;
function checkvalue(value:ValueType): void{
  if(typeof value === 'string'){
    console.log(value.toUpperCase());
    return; 
  }
  if(typeof value === 'number'){
    console.log(value.toFixed());
    return; 
  }
  console.log(`boolean: ${value}`);
}
checkvalue(value1);

//equality narrowing

type Dog = { type: 'dog'; name: string; bark: () => void };
type Cat = { type: 'cat'; name: string; meow: () => void };
type Animal = Dog | Cat;

// function makeSound(animal: Animal){
//   if (animal.type ==='dog') {
//     animal.bark();
//   }else{
//     animal.meow();
//   }
// }
function makeSound(animal: Animal) {
  if ('bark' in animal) {
    // TypeScript knows that `animal` is a Dog in this block
    animal.bark();
  } else {
    // TypeScript knows that `animal` is a Cat in this block
    animal.meow();
  }
}
// challenge Truthy and falsy guard
function printLength(str: string | null |undefined){
  if (str) {
    console.log(str.length);
  }
  else{
    console.log('No string provided');
  }
}
printLength('hello');
printLength('');
printLength(null);
printLength(undefined);

//insatnce of class
function checkInput(input: Date | string):string{
  if (input instanceof Date) {
    return input.getDate().toString();
  }
  return input
}
const fullYear = checkInput(new Date())
console.log(fullYear);

//challlengetype predicate
type Student21 = {
  name: string;
  study: () => void;
};

type User21 = {
  name: string;
  login: () => void;
};

type Person21 = Student21 | User21;

const randomPerson21 = (): Person21 => {
  return Math.random() > 0.5
    ? { name: 'john', study: () => console.log('Studying') }
    : { name: 'mary', login: () => console.log('Logging in') } ;
};

const person21 = randomPerson21();
console.log(person21);

if ('study' in person21) {
  person21.study();
} else {
  person21.login();
}

// Challenge - Discriminated Unions and exhaustive check 
//using the never type
// A discriminated union in TypeScript is a type that 
//can be one of several different types, each identified 
//by a unique literal property (the discriminator), 
//allowing for type-safe handling of each possible variant.

// starter code
type IncrementAction = {
  type: 'increment';
  amount: number;
  timestamp: number;
  user: string;
};

type DecrementAction = {
  type: 'decrement';
  amount: number;
  timestamp: number;
  user: string;
};

type Action = IncrementAction | DecrementAction;

function reducer(state:number, action:Action){
  switch(action.type){
    case 'increment':
      return state + action.amount;
    case 'decrement':
      return state - action.amount;  
    default:
      const unexpectedAction:never = action;
      throw new Error(`unexpectedAction ${unexpectedAction}`);
  }
}
const newState = reducer(15, {
  type:'decrement',
  user:"Joe",
  amount:20,
  timestamp:123})
  console.log(newState);
  
  //generics

function genericFunction<T>(agr:T):T{
  return agr;
}
const someStringValue = genericFunction<string>('Hello world');
const someNumberValue = genericFunction<number>(2);

interface GenericInterface<T>{
  value: T;
  gatValue:()=>T;
}
const genericString: GenericInterface<string>={
  value: 'Hello World',
  gatValue(){
    return this.value;
  }
}
async function someFunction():Promise<number> {
  return 1999;
}
const result31 = someFunction();

//challenge

function generateStringArray(length: number, value: string): string[]{
  let result: string[]=[];
  result = Array(length).fill(value);
  return result;
}
function createArray<T>(length: number, value: T): Array<T>{
  let result: T[]=[];
  result = Array(length).fill(value);
  return result;
}

let arraryStrings = createArray<string>(10, 'hello');
let arraryNumbers = createArray<number>(10, 200);

console.log(generateStringArray(5, 'Masu'))
console.log(arraryNumbers);
console.log(arraryStrings);

//fetch Data
//zod library
import {z} from 'zod';
const url = 'https://www.course-api.com/react-tours-project';
type Tour = z.infer<typeof tourSchema>

const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string(),
})

async function fetchData(url: string):Promise<Tour[]> {
  try {
    const response = await fetch(url);

    // Check if the request was successful.
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const Rawdata:Tour[] = await response.json();
    const result = tourSchema.array().safeParse(Rawdata);
    if(!result.success){
      throw new Error(`Ivalid data: ${result.error}`);
      
    }
    console.log(result);
    
    return result.data;
  } catch (error) {
    const errMsg =
      error instanceof Error ? error.message : 'there was an error...';
    console.error(errMsg);
    return [];
  }
}
const tour = await fetchData(url);
tour.map((tour)=>{
  console.log(tour.name);
  
});

//Type script Declaration file
import { Masu } from './types';
const example: Masu = {
  name: "Example Name"
};
console.log(example.name);

import bcryptjs from 'bcryptjs'

//classes in TS
class Book{
  public title12: string;
  public athor12: string;
  private checkedOut: boolean =false;

  constructor(title12:string , athor12:string){
  this.title12= title12;
  this.athor12= athor12;
}
public checkOut(){
  this.checkedOut = this.toggleCheckedStatus();
}
public isCheckOut(){
  return this.checkedOut = true;
}
private toggleCheckedStatus(){
  return this.checkedOut;
}
}
const myBook = new Book('My file', 'Damian Marley');
// console.log(myBook);
myBook.checkOut();
console.log(myBook.isCheckOut());

// console.log(myBook.athor12);
// console.log(myBook.title12);

