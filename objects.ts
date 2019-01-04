//objects implicit type
let person = {
  name: "shomail",
  age: 30
}

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

let user: {name:string, userId: number} = {
  name: 'alex',
  userId: 112
}

//complex object type example

let userScore: {score: number[], getScore: (all: boolean) => number[]} = {
  score: [100,29, 82],

  getScore: function(all: boolean): number[] {
    return this.score
  }
}

// userScore = {}; error

//storing complex types to type aliases
type UserData = {
  data: number[],
  getData: (all: boolean) => number[]
}

let newUser: UserData = {
  data: [123,300,211],

  getData: function(all: boolean): number[] {
    return this.data
  }
}