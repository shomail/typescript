"use strict";
//Generic class
//it's a convention to use 'U' with 'T' if you use multiple types in generic
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        //here we are casting them to numbers with +
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 4;
console.log(simpleMath.calculate());
//Generic Map class
var GenMap = /** @class */ (function () {
    function GenMap() {
        this.map = {};
    }
    GenMap.prototype.setItem = function (key, item) {
        this.map[key] = item;
    };
    GenMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    GenMap.prototype.clear = function () {
        this.map = {};
    };
    GenMap.prototype.printMap = function () {
        for (var key in this.map) {
            console.log(key + " => " + this.map[key]);
        }
    };
    return GenMap;
}());
var numMap = new GenMap();
numMap.setItem('cars', 11);
numMap.setItem('bikes', 15);
numMap.setItem('cycles', 26);
numMap.printMap();
var personMap = new GenMap();
personMap.setItem('name', 'sbt');
personMap.setItem('game', 'call of duty');
personMap.setItem('score', '250pts');
personMap.printMap();
