// Exercise 1 - How was your TypeScript Class?
// function Car(name) {
//     this.name = name;
//     this.acceleration = 0;

//     this.honk = function() {
//         console.log("Toooooooooot!");
//     };

//     this.accelerate = function(speed) {
//         this.acceleration = this.acceleration + speed;
//     }
// }
class Car {
  constructor(public name: string, public acceleration: number = 0) {}

  honk(): void {
    console.log('Tooot!!');
  }

  accelerate(speed: number): void {
    this.acceleration = this.acceleration + speed;
  }
}
var bmwCar = new Car('BMW');
bmwCar.honk();
console.log(bmwCar.acceleration);
bmwCar.accelerate(20);
console.log(bmwCar.acceleration);

// Exercise 2 - Two objects, based on each other ...
// var baseObject = {
//   width: 0,
//   length: 0
// };
// var rectangle = Object.create(baseObject);
class BaseObject {
  constructor(protected width: number, protected height: number) {
    this.width = width;
    this.height = height;
  }
}

class Rectangle extends BaseObject {
  constructor(width: number, height: number) {
    super(width, height);
  }
  calcSize(): number {
    return this.width * this.height;
  }
}
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function() {
//   return this.width * this.length;
// };
const rectangle = new Rectangle(5, 2);
console.log(rectangle.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
// var person = {
//   _firstName: ''
// };

// Object.defineProperty(person, 'firstName', {
//   get: function() {
//     return this._firstName;
//   },
//   set: function(value) {
//     if (value.length > 3) {
//       this._firstName = value;
//     } else {
//       this._firstName = '';
//     }
//   },
//   enumerable: true,
//   configurable: true
// });

class UselessPerson {
  private _firstName: string = '';

  public get firstName(): string {
    return this._firstName;
  }

  public set firstName(value: string) {
    if (value.length > 3) {
      this._firstName = value;
    } else {
      this._firstName = '';
    }
  }
}

const uselessPerson = new UselessPerson();
console.log(uselessPerson.firstName);
uselessPerson.firstName = 'sho';
console.log(uselessPerson.firstName);
uselessPerson.firstName = 'shomail';
console.log(uselessPerson.firstName);
