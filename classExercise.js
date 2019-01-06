"use strict";
// Exercise 1 - How was your TypeScript Class?
// function Car(name) {
//     this.name = name;
//     this.acceleration = 0;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//     this.honk = function() {
//         console.log("Toooooooooot!");
//     };
//     this.accelerate = function(speed) {
//         this.acceleration = this.acceleration + speed;
//     }
// }
var Car = /** @class */ (function () {
    function Car(name, acceleration) {
        if (acceleration === void 0) { acceleration = 0; }
        this.name = name;
        this.acceleration = acceleration;
    }
    Car.prototype.honk = function () {
        console.log('Tooot!!');
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
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
var BaseObject = /** @class */ (function () {
    function BaseObject(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    return BaseObject;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        return _super.call(this, width, height) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(BaseObject));
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function() {
//   return this.width * this.length;
// };
var rectangle = new Rectangle(5, 2);
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
var UselessPerson = /** @class */ (function () {
    function UselessPerson() {
        this._firstName = '';
    }
    Object.defineProperty(UselessPerson.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    return UselessPerson;
}());
var uselessPerson = new UselessPerson();
console.log(uselessPerson.firstName);
uselessPerson.firstName = 'sho';
console.log(uselessPerson.firstName);
uselessPerson.firstName = 'shomail';
console.log(uselessPerson.firstName);
