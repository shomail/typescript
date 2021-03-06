//functions that return values
//here after argument () we use colon and return type of the function

function sayGreeting(): string {
  return 'Hello World again';
}

console.log(sayGreeting());

//functions with void

function logName(name: string): void {
  console.log(`logging the username: ${name}`);
}

logName('shomail');

//here if we dont specify the args type they will be any and then it wont error if we pass string
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(10, 20));

//we do not have only return and argument types, whole functions are types as well
//we set function type as follows:

let addFunc: (a: number, b: number) => number;
// let addFunc;

// addFunc = logName;
// addFunc('shomail bin tahir');
addFunc = add;
console.log(addFunc(10, 100));
