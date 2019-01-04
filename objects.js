"use strict";
//objects implicit type
var person = {
    name: "shomail",
    age: 30
};
//here typescript will auto create a type object and assign it to person variable. 
//now you cannot assign empty obj to it
//this object should have name and age property
//order is not important but type and property name is
// person = {};
// person = {
//   a: 'name',
//   b: 123
// }
// person = {
//   age: 30,
//   name: 'new person'
// }
//we can also define explicit object type
var user = {
    name: 'alex',
    userId: 112
};
//complex object type example
var userScore = {
    score: [100, 29, 82],
    getScore: function (all) {
        return this.score;
    }
};
var newUser = {
    data: [123, 300, 211],
    getData: function (all) {
        return this.data;
    }
};
