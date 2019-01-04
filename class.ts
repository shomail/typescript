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
