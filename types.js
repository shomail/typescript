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
var hobbies = ["cooking", "games", "movies"];
//now tsc will auto assign type string to this array
//we can add type: any[] to make it any type array, but it should be array
// hobbies = [100]; //and if we try to assign numbers to it it will produce error
//tuples
//they are just arrays with mixed types and predefined umber of items
var address = ["high street", 123];
// address = [123, 'home']
