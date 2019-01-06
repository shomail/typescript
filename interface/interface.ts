// function greetFunc(person: { name: string }) {
//   console.log(`Hello, ${person.name}`);
// }

//if you want to define properties in interface but you don't know there name yet we use special ts notation
// [propName: string]: type of property
interface NamedPerson {
  firstName: string;
  age?: number;
  [propName: string]: any;
  say(message: string): void;
}

function greetFunc(person: NamedPerson) {
  console.log(`Hello, ${person.firstName}`);
}
function changeName(person: NamedPerson) {
  person.firstName = 'Tahir';
}

//here if we change the properties of obj and function relies on them, ts won't produce error and it will be runtime undefined error.
//Interface is a contract siged by object to guarantee that it will provide certain properties.
//here in function we are defining an interface and passed object should atleast have this property and it can have more
//instead of defining interface in place a better way is to define separate interface
//interface is a way to make sure certain properties/methods are always available on object
const greetPerson: NamedPerson = {
  firstName: 'shomail',
  hobbies: ['cook', 'sports'],
  age: 30,
  say(message: string) {
    console.log(`${this.firstName} says, ${message}`);
  }
};

greetFunc(greetPerson);
changeName(greetPerson);
greetFunc(greetPerson);
// greetFunc({ firstName: 'Name is name', age: 88 });
//here if we use object literal to fullfil contract it should exactly match the interface and age property produce error
//when assigned to variable tsc only checks for specific properties and ignore rest of props
//if we want age property to be possible but not required in obj literal form we need to add age with ? in interface

//we can also use classes with interface
class IntPerson implements NamedPerson {
  firstName: string = '';
  lastName: string = '';
  say(message: string): void {
    console.log(message);
  }
}

//interfaces for function types

interface DoubleValueFunc {
  (num1: number, num2: number): number;
}

let newDoubleFunc: DoubleValueFunc;
newDoubleFunc = function(num1: number, num2: number) {
  return num1 + num2;
};

//Interface inheritance

interface AgedPerson extends NamedPerson {
  age: number;
}

const oldPerson: AgedPerson = {
  firstName: 'old man',
  age: 88,
  say(message: string) {
    console.log(message);
  }
};
