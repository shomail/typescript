"use strict";
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
var User = /** @class */ (function () {
    //public username: string in constructor is a shorthand ts provides to create a public property in class and set it's value to the passed argument
    function User(name, username) {
        this.username = username;
        this.type = 'basic';
        this.userId = 0;
        this.isLoggedIn = false;
        this.name = name;
        // this.type = 'basic';
        // this.userId = 0;
    }
    User.prototype.getType = function () {
        return this.type;
    };
    User.prototype.setType = function (type) {
        this.type = type;
    };
    User.prototype.login = function () {
        this.isLoggedIn = true;
        this.setUserId(this.isLoggedIn);
    };
    User.prototype.logout = function () {
        this.isLoggedIn = false;
        this.setUserId(this.isLoggedIn);
    };
    User.prototype.setUserId = function (status) {
        this.userId = status ? 101 : 0;
    };
    return User;
}());
//inheritance
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        var _this = _super.call(this, 'tahir', 'adm123') || this;
        _this.type = 'admin';
        return _this;
    }
    return Admin;
}(User));
var aUser = new User('shomail', 'sh13');
var aAdmin = new Admin();
// console.log(aAdmin);
// console.log(aUser.getType());
// console.log(aUser);
// aUser.login();
// console.log(aUser);
// aUser.logout();
// console.log(aUser);
//getters and setters
var Dog = /** @class */ (function () {
    function Dog() {
        this._breed = 'None';
    }
    Object.defineProperty(Dog.prototype, "breed", {
        get: function () {
            return this._breed.toUpperCase();
        },
        set: function (v) {
            if (v.length > 3) {
                this._breed = v;
            }
            else {
                this._breed = 'None';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Dog;
}());
var dog = new Dog();
console.log(dog.breed);
dog.breed = 'pommy pipi';
console.log(dog.breed);
//static properties & methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircum = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircum(10));
//Abstract Class
//these classes cannot be instantiated directly
//you can only inherit from them
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = 'Default';
        this.budget = 0;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super IT Project');
console.log(newProject);
