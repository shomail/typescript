"use strict";
// function greetFunc(person: { name: string }) {
//   console.log(`Hello, ${person.name}`);
// }
function greetFunc(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = 'Tahir';
}
//here if we change the properties of obj and function relies on them, ts won't produce error and it will be runtime undefined error.
//Interface is a contract siged by object to guarantee that it will provide certain properties.
//here in function we are defining an interface and passed object should atleast have this property and it can have more
//instead of defining interface in place a better way is to define separate interface
//interface is a way to make sure certain properties/methods are always available on object
var greetPerson = {
    firstName: 'shomail',
    hobbies: ['cook', 'sports'],
    age: 30,
    say: function (message) {
        console.log(this.firstName + " says, " + message);
    }
};
greetFunc(greetPerson);
changeName(greetPerson);
greetFunc(greetPerson);
// greetFunc({ firstName: 'Name is name', age: 88 });
//here if we use object literal to fullfil contract it should exactly match the interface and age property produce error
//when assigned to variable tsc only checks for specific properties and ignore rest of props
//if we want age property to be possible but not required in obj literal form we need to add age with ? in interface
//we can also use classes with interface
var IntPerson = /** @class */ (function () {
    function IntPerson() {
        this.firstName = '';
        this.lastName = '';
    }
    IntPerson.prototype.say = function (message) {
        console.log(message);
    };
    return IntPerson;
}());
var newDoubleFunc;
newDoubleFunc = function (num1, num2) {
    return num1 + num2;
};
var oldPerson = {
    firstName: 'old man',
    age: 88,
    say: function (message) {
        console.log(message);
    }
};
