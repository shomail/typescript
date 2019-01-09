//here its not clear if string is returned we have .length prop
//but in case of number we have undefined length prop
//we want a generic function like echo to handle all types of data 
//but we want to ts to know exactly what to expect instead of any type
//simple generic
function echo(data:any) {
  return data;
}

console.log(echo('sbt'));
console.log(echo(27));
console.log(echo({name: 'SBT'}));

//Better Generic
//<T> this construct makes it a generic function
//capital T is just convention you can use any identifier
//now if we try to access .length prop on number we get an error
//we can also explicitly assign type to generic function call
function genericEcho<T>(data: T) {
  return data;
}

console.log(genericEcho('sbt'));
console.log(genericEcho<number>(27));
console.log(genericEcho({name: 'SBT'}));

//these are all the examples of generics in functions
//but ts also has generic types
//Generic Types

//this is cryptic so lets break it down
//we are assigning a type to const everything after : and before = is type
//

const echo2: <T>(data: T) => T = genericEcho;

console.log(echo2<string>('something new'));