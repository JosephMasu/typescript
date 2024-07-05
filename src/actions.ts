
//Modules export files

export function sayHello(name: string, age: number): void {
    console.log(`Hello ${name} Your age is ${age}!`);
  }
  
  export let person = 'susan';
  
  export type Student = {
    name: string;
    age: number;
  };
  
  const newStudent: Student = {
    name: 'peter',
    age: 24,
  };
  
  export default newStudent;