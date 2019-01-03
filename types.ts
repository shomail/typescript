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
let strAge : string;

strAge = '31';

//array types
let hobbies = ["cooking", "games", "movies"];
//now tsc will auto assign type string to this array
//we can add type: any[] to make it any type array, but it should be array
// hobbies = [100]; //and if we try to assign numbers to it it will produce error

//tuples
//they are just arrays with mixed types and predefined umber of items
let address: [string, number] = ["high street", 123];
// address = [123, 'home']