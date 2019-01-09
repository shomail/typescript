//Built in generics in ts
//array is actually a generic array type in ts
//we can explicitly assign generic array type
const genericResults: Array<number> = [10, 20, 33];
genericResults.push(43);
// genericResults.push('44'); error

//Arrays
function printAll<T>(args: T[]) {
  args.forEach(arg => console.log(arg));
}

//here you can mix and match array elem
printAll(['a', 'b', 12, false]);

//but to be explicit you can assign generic type of array
//now if there is any other type of elem in array it will produce error
printAll<number>([1,2,3,4]);