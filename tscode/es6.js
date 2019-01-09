"use strict";
//let and const
var letStr = 'A useless string';
letStr = 'We can reassign it';
var maxAge = 100;
// maxAge = 99; error
//block scope
function uselessFunc() {
    var letStr = 'this is a useless function';
    console.log(letStr);
}
//arrow function
var addNumbers = function (num1, num2) {
    return num1 + num2;
};
var subNumbers = function (num1, num2) { return num1 - num2; };
//default func params
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    console.log("COUNTDOWN START");
    while (start > 0) {
        start--;
        console.log(start);
    }
    console.log("COUNTDOWN END");
};
// countdown();
//rest & spread ...
var listOfNumbers = [100, 99, 81, 11, 909];
//spread array in func args
// console.log(Math.max(...listOfNumbers));
//in func calls ... is spread and in func def ... is rest
//rest args in func
function makeAnArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
// console.log(makeAnArray(1,2,3,4,5,6))
//tuples as type for rest params ts v3 specific
function printInfo() {
    var info = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        info[_i] = arguments[_i];
    }
    console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
}
//Destructuring Array
var favMovies = ["Avengers", "Lord of the rings", "Harry potter"];
var avengers = favMovies[0], lotr = favMovies[1], hp = favMovies[2];
console.log(avengers, lotr, hp);
//Destructuring Objects
var movieData = {
    name: "Avengers",
    year: 2018,
    rating: 9.9
};
var movieName = movieData.name, movieYear = movieData.year;
console.log(movieName, movieYear);
//template literals
var teamName = "Lahore Qalandars";
var teamRanking = 6;
console.log("Team " + teamName + " got " + teamRanking + "th Position in the tournament!");
//ES6 Exercises
// Exercise 1 - Maybe use an Arrow Function?
// var double = function(value) {
//   return value * 2;
// };
var double = function (value) { return value * 2; };
console.log(double(10));
// Exercise 2 - If only we could provide some default values...
// var greet = function (name) {
//   if (name === undefined) { name = "Max"; }
//   console.log("Hello, " + name);
// };
var greet = function (name) {
    if (name === void 0) { name = "World"; }
    console.log("Hello, " + name + "!");
};
greet();
greet("Anna");
// Exercise 3 - Isn't there a shorter way to get all these Values?
// var numbers = [-3, 33, 38, 5];
// console.log(Math.min.apply(Math, numbers));
var uselessNumbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, uselessNumbers));
// Exercise 4 - I have to think about Exercise 3 ...
// var newArray = [55, 20];
// Array.prototype.push.apply(newArray, numbers);
var newArray = [55, 20].concat(uselessNumbers);
console.log(newArray);
// Exercise 5 - That's a well-constructed array.
// var testResults = [3.89, 2.99, 1.38];
// var result1 = testResults[0];
// var result2 = testResults[1];
// var result3 = testResults[2];
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
// Exercise 6 - And a well-constructed object!
// var scientist = {firstName: "Will", experience: 12};
// var firstName = scientist.firstName;
// var experience = scientist.experience;
var scientist = { firstName: "Will", experience: 12 };
var scientistFirstName = scientist.firstName, scientistExperience = scientist.experience;
console.log(scientistFirstName, scientistExperience);
