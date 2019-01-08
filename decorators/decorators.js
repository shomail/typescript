"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//a decorator is a function
//here we attach this decorator to the class
//decorators attached to class gets one argument by ts and it's the constructor of the class
function logged(constructorFn) {
    console.log(constructorFn);
}
//this is how we attach functions as decorators
//to get rid of experimental support error, set experimentalDecorators in config
var Bill = /** @class */ (function () {
    function Bill() {
        console.log('Hi');
    }
    Bill = __decorate([
        logged
    ], Bill);
    return Bill;
}());
var bill = new Bill();
//Factory example
function logging(value) {
    return value ? logged : function () { return 0; };
}
var Sport = /** @class */ (function () {
    function Sport() {
    }
    Sport = __decorate([
        logging(true)
    ], Sport);
    return Sport;
}());
