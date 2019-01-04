"use strict";
//implicit types
//string
var myName = 'shomail';
//number
var age = 30;
//boolean
var hasJob = true;
//explicit types
var newAge;
//here tsc do not give error because we have not assigned values when variable initialize and tsc will treat it as type : any
newAge = 31;
newAge = '31';
//so we need to assign type to variable
var strAge;
strAge = '31';
//array types
var hobbies = ['cooking', 'games', 'movies'];
//now tsc will auto assign type string to this array
//we can add type: any[] to make it any type array, but it should be array
// hobbies = [100]; //and if we try to assign numbers to it it will produce error
//tuples
//they are just arrays with mixed types and predefined umber of items
var address = ['high street', 123];
// address = [123, 'home']
//enums
var RGB;
(function (RGB) {
    RGB[RGB["red"] = 0] = "red";
    RGB[RGB["green"] = 1] = "green";
    RGB[RGB["blue"] = 2] = "blue";
})(RGB || (RGB = {}));
//you can give values to enums by: red = 100;
//and then next item will have value of 101
var newColor = RGB.red;
//any
var car = 'Ford';
car = {
    brand: 'Ford',
    year: 2006
};
//union types
//instead of any type which fails the concept of types we can use union types to say one or more types possible nad we are not sure about them. we can use more then two types in union as well
var dollarRate = 150;
dollarRate = '141';
// dollarRate = false; error
//checking for types at runtime
var userId = 23;
if (typeof userId === 'number') {
    //at runtime with typeof the type must be in quotes as string
    //do something
}
//never type
//because this functions never finishes we can assign it never type
function neverReturn() {
    throw new Error('error');
}
//nullable type
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
//here it is allowed because variable type is any but if strictNullChecks is on it will throw error.
var canThisBeAny = null;
canThisBeAny = 400;
