class User {
  name: string;
  protected type: string = 'basic';
  protected userId: number = 0;
  private isLoggedIn: boolean = false;
  //public username: string in constructor is a shorthand ts provides to create a public property in class and set it's value to the passed argument
  constructor(name: string, public username: string) {
    this.name = name;
    // this.type = 'basic';
    // this.userId = 0;
  }

  getType() {
    return this.type;
  }

  setType(type: string) {
    this.type = type;
  }

  login() {
    this.isLoggedIn = true;
    this.setUserId(this.isLoggedIn);
  }

  logout() {
    this.isLoggedIn = false;
    this.setUserId(this.isLoggedIn);
  }

  private setUserId(status: boolean) {
    this.userId = status ? 101 : 0;
  }
}

//inheritance
class Admin extends User {
  constructor() {
    super('tahir', 'adm123');
    this.type = 'admin';
  }
}

let aUser = new User('shomail', 'sh13');
let aAdmin = new Admin();

// console.log(aAdmin);

// console.log(aUser.getType());
// console.log(aUser);

// aUser.login();

// console.log(aUser);

// aUser.logout();

// console.log(aUser);

//getters and setters
class Dog {
  private _breed: string = 'None';

  public get breed(): string {
    return this._breed.toUpperCase();
  }

  public set breed(v: string) {
    if (v.length > 3) {
      this._breed = v;
    } else {
      this._breed = 'None';
    }
  }
}

let dog = new Dog();

console.log(dog.breed);

dog.breed = 'pommy pipi';

console.log(dog.breed);

//static properties & methods

class Helpers {
  static PI: number = 3.14;
  static calcCircum(diameter: number): number {
    return this.PI * diameter;
  }
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircum(10));

//Abstract Class
//these classes cannot be instantiated directly
//you can only inherit from them
abstract class Project {
  projectName: string = 'Default';
  budget: number = 0;
  abstract changeName(name: string): void;
  calcBudget() {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  changeName(name: string): void {
    this.projectName = name;
  }
}

let newProject = new ITProject();

console.log(newProject);
newProject.changeName('Super IT Project');
console.log(newProject);

//private constructor

class OnlyOne {
  private static instance: OnlyOne;

  private constructor(public readonly name: string) {}

  static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne('The Only One');
    }
    return OnlyOne.instance;
  }
}

//this is singleton pattern
//it means this class should have only one instance throughout the app
// let wrong = new OnlyOne('The Only One');
let right = OnlyOne.getInstance();

//if we do not set setter of a property it becomes a readonly
//otherwise we can add keyword readonly infront of the property
