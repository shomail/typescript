//implicit types

//string
let myName = 'shomail';

//number
let age = 30;

//boolean
let hasJob = true;

//explicit types
let newAge;
//here tsc do not give error because we have not assigned values when variable initialize and tsc will treat it as type : any
newAge = 31;
newAge = '31';

//so we need to assign type to variable
let strAge: string;

strAge = '31';

//array types
let hobbies = ['cooking', 'games', 'movies'];
//now tsc will auto assign type string to this array
//we can add type: any[] to make it any type array, but it should be array
// hobbies = [100]; //and if we try to assign numbers to it it will produce error

//tuples
//they are just arrays with mixed types and predefined umber of items
let address: [string, number] = ['high street', 123];
// address = [123, 'home']

//enums
enum RGB {
  red,
  green,
  blue
}
//you can give values to enums by: red = 100;
//and then next item will have value of 101

let newColor: RGB = RGB.red;

//any
let car: any = 'Ford';
car = {
  brand: 'Ford',
  year: 2006
};

//union types
//instead of any type which fails the concept of types we can use union types to say one or more types possible nad we are not sure about them. we can use more then two types in union as well

let dollarRate: number | string = 150;

dollarRate = '141';

// dollarRate = false; error

//checking for types at runtime
let userId = 23;

if(typeof userId === 'number'){
  //at runtime with typeof the type must be in quotes as string
  //do something
}

//never type
//because this functions never finishes we can assign it never type
function neverReturn(): never {
  throw new Error('error');
}

//nullable type
let canBeNull: number | null = 12;
canBeNull = null;

let canAlsoBeNull;
canAlsoBeNull = null;

//here it is allowed because variable type is any but if strictNullChecks is on it will throw error.
let canThisBeAny = null;
canThisBeAny = 400;
