//let and const
let letStr = 'A useless string';
letStr = 'We can reassign it';

const maxAge = 100;
// maxAge = 99; error

//block scope
function uselessFunc() {
  let letStr = 'this is a useless function';
  console.log(letStr);
}

//arrow function
const addNumbers = function(num1: number, num2: number): number {
  return num1 + num2;
};

const subNumbers = (num1: number, num2: number): number => num1 - num2;

//default func params
const countdown = (start: number = 10): void => {
  console.log('COUNTDOWN START');
  while (start > 0) {
    start--;
    console.log(start);
  }
  console.log('COUNTDOWN END');
};

// countdown();

//rest & spread ...
const listOfNumbers = [100, 99, 81, 11, 909];
//spread array in func args
// console.log(Math.max(...listOfNumbers));

//in func calls ... is spread and in func def ... is rest
//rest args in func
function makeAnArray(...args: number[]) {
  return args;
}

// console.log(makeAnArray(1,2,3,4,5,6))

//tuples as type for rest params ts v3 specific
function printInfoToConsole(...info: [string, number]) {
  console.log('My name is ' + info[0] + ' and I am ' + info[1] + ' years old!');
}

//Destructuring Array
const favMovies = ['Avengers', 'Lord of the rings', 'Harry potter'];
const [avengers, lotr, hp] = favMovies;
console.log(avengers, lotr, hp);

//Destructuring Objects

const movieData = {
  name: 'Avengers',
  year: 2018,
  rating: 9.9
};

const { name: movieName, year: movieYear } = movieData;

console.log(movieName, movieYear);

//template literals
const teamName = 'Lahore Qalandars';
const teamRanking = 6;
console.log(`Team ${teamName} got ${teamRanking}th Position in the tournament!`);

//ES6 Exercises

// Exercise 1 - Maybe use an Arrow Function?
// var double = function(value) {
//   return value * 2;
// };

const double = (value: number): number => value * 2;

console.log(double(10));

// Exercise 2 - If only we could provide some default values...
// var greet = function (name) {
//   if (name === undefined) { name = "Max"; }
//   console.log("Hello, " + name);
// };
const greet = (name: string = 'World'): void => {
  console.log(`Hello, ${name}!`);
};
greet();
greet('Anna');

// Exercise 3 - Isn't there a shorter way to get all these Values?
// var numbers = [-3, 33, 38, 5];
// console.log(Math.min.apply(Math, numbers));
const uselessNumbers = [-3, 33, 38, 5];
console.log(Math.min(...uselessNumbers));

// Exercise 4 - I have to think about Exercise 3 ...
// var newArray = [55, 20];
// Array.prototype.push.apply(newArray, numbers);
const newArray = [55, 20, ...uselessNumbers];
console.log(newArray);

// Exercise 5 - That's a well-constructed array.
// var testResults = [3.89, 2.99, 1.38];
// var result1 = testResults[0];
// var result2 = testResults[1];
// var result3 = testResults[2];
const testResults = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResults;
console.log(result1, result2, result3);

// Exercise 6 - And a well-constructed object!
// var scientist = {firstName: "Will", experience: 12};
// var firstName = scientist.firstName;
// var experience = scientist.experience;
const scientist = { firstName: 'Will', experience: 12 };
const { firstName: scientistFirstName, experience: scientistExperience } = scientist;
console.log(scientistFirstName, scientistExperience);
