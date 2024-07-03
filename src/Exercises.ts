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

    interface Book {
        readonly isbn: number;
        title: string;
        author: string;
        genre?: string;
      }
      
      const deepWork: Book = {
        isbn: 9781455586691,
        title: 'Deep Work',
        author: 'Cal Newport',
        genre: 'Self-help',
      };
    
