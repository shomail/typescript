"use strict";
//Built in generics in ts
//array is actually a generic array type in ts
//we can explicitly assign generic array type
var genericResults = [10, 20, 33];
genericResults.push(43);
// genericResults.push('44'); error
//Arrays
function printAll(args) {
    args.forEach(function (arg) { return console.log(arg); });
}
//here you can mix and match array elem
printAll(['a', 'b', 12, false]);
//but to be explicit you can assign generic type of array
//now if there is any other type of elem in array it will produce error
printAll([1, 2, 3, 4]);
